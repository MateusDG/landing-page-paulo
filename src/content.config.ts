import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

/* ==========================================================================
   SCHEMAS DE CONTEÚDO

   O schema não está aqui só para tipar, está para IMPEDIR publicação
   incompleta. Três regras são validadas no build e derrubam o `npm run
   build` se violadas:

     1. Todo imóvel precisa de `croqui` (o polígono do perímetro). É o que
        faz cada ficha ser única e a carteira não virar galeria de estoque.
     2. Todo imóvel precisa de pelo menos um item em `oQueFalta`. Anúncio
        sem defeito é anúncio mentindo, e o comprador rural sente isso.
     3. Imóvel com `status: ativa` precisa de 6 fotos. Enquanto não houver,
        marque `rascunho: true`, assim ele aparece no site com a ficha e o
        croqui, mas o sistema deixa claro que falta a foto.

   Qualidade forçada pelo sistema, não pela disciplina.
   ========================================================================== */

const REGIOES = [
  'montanhas-capixabas',
  'norte-capixaba',
  'sul-e-caparao',
  'litoral-e-franja',
] as const;

const FINALIDADES = ['produzir', 'morar', 'lazer', 'investir', 'turismo'] as const;

const caminhoFoto = z
  .string()
  .regex(
    /^\/imoveis\/[a-z0-9-]+\/[a-z0-9._-]+\.(?:jpe?g|png|webp)$/i,
    'a foto precisa ser um arquivo local dentro de /imoveis/',
  )
  .refine((src) => !src.includes('..'), 'o caminho da foto nao pode conter ..');

const caminhoSvg = z
  .string()
  .min(20, 'croqui é obrigatório, ver README §Croquis')
  .regex(
    /^[MmLlHhVvCcSsQqTtAaZz0-9+.,\-\s]+$/,
    'croqui contem caracteres que nao pertencem a um path SVG',
  );

const viewBoxSvg = z.string().regex(
  /^-?\d+(?:\.\d+)?(?:\s+-?\d+(?:\.\d+)?){3}$/,
  'viewBox precisa conter exatamente quatro numeros',
);

const foto = z.object({
  src: caminhoFoto,
  /* alt específico, não "fazenda". Ver README §Fotografia. */
  alt: z.string().min(12, 'alt precisa descrever a foto, não rotulá-la'),
  legenda: z.string().optional(),
  largura: z.number().int().positive().optional(),
  altura: z.number().int().positive().optional(),
});

const imoveis = defineCollection({
  loader: glob({ base: './src/content/imoveis', pattern: '**/*.md' }),
  schema: z
    .object({
      codigo: z
        .string()
        .regex(/^[A-Z]{2}-\d{4}$/, 'formato do código: XX-0000, ex. FA-0142'),
      titulo: z.string().min(8),
      municipio: z.string(),
      regiao: z.enum(REGIOES),
      /* null = área total ainda não informada pelo proprietário. */
      areaHa: z.number().positive().nullable().default(null),

      /* Perímetro real da área, simplificado para ~20 vértices.
         Origem: shapefile do CAR ou do SIGEF. Ver README §Croquis. */
      croqui: caminhoSvg,
      croquiViewBox: viewBoxSvg.default('0 0 100 100'),
      croquiVerificado: z.boolean().default(false),

      finalidade: z.array(z.enum(FINALIDADES)).min(1),
      resumo: z.string().min(60).max(400),

      agua: z.string(),
      energia: z.string(),
      sinal: z.string().optional(),
      solo: z.string().optional(),
      benfeitorias: z.array(z.string()).default([]),

      acesso: z.object({
        asfaltoKm: z.number().min(0),
        terraKm: z.number().min(0),
        nota: z.string(),
      }),

      tempoDeVitoria: z.string(),
      distanciaVitoriaKm: z.number().optional(),
      coordenada: z.string().optional(),

      /* null = "sob consulta". Nunca a string "Consulte". */
      preco: z.number().nullable(),

      /* Honestidade obrigatória. Um anúncio sem nenhum ponto fraco declarado
         não passa no build. */
      oQueFalta: z
        .array(z.string())
        .min(1, 'declare pelo menos um ponto fraco, ver README §Honestidade'),

      status: z.enum(['ativa', 'reservada', 'vendida']).default('ativa'),
      vendidaEm: z.coerce.date().optional(),
      destaque: z.boolean().default(false),

      /* Escape hatch consciente: publica sem as 6 fotos, assumindo a dívida. */
      rascunho: z.boolean().default(false),

      fotos: z.array(foto).default([]),
      publicadoEm: z.coerce.date(),
      atualizadoEm: z.coerce.date(),
    })
    .superRefine((v, ctx) => {
      if (v.status === 'ativa' && !v.rascunho && v.fotos.length < 6) {
        ctx.addIssue({
          code: 'custom',
          path: ['fotos'],
          message:
            `imóvel ativo precisa de 6 fotos (tem ${v.fotos.length}). ` +
            'Complete a shot list ou marque `rascunho: true` enquanto isso.',
        });
      }
      if (v.status === 'vendida' && !v.vendidaEm) {
        ctx.addIssue({
          code: 'custom',
          path: ['vendidaEm'],
          message: 'imóvel vendido precisa da data, o carimbo usa mês/ano.',
        });
      }
    }),
});

const diario = defineCollection({
  loader: glob({ base: './src/content/diario', pattern: '**/*.md' }),
  schema: z.object({
    titulo: z.string(),
    local: z.string(),
    regiao: z.enum(REGIOES).optional(),
    data: z.coerce.date(),
    /* Uma foto autoral por post. Se não houver, o post vale pelo texto. */
    foto: foto.optional(),
  }),
});

export const collections = { imoveis, diario };
