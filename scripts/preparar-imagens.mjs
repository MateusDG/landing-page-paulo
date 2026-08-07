import { mkdir, readdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const raiz = process.cwd();

const grupos = [
  { origem: 'terreno2', destino: 'ibiracu-pesqueiros' },
  { origem: 'terreno3', destino: 'santa-teresa-cafe' },
  { origem: 'terreno4', destino: 'ibiracu-lagoa' },
  { origem: 'terreno5', destino: 'fundao-vista' },
  {
    origem: 'terreno6',
    destino: 'aracruz-10-mil-m2',
    ordem: [
      'WhatsApp Image 2026-08-07 at 18.49.31 (2).jpeg',
      'WhatsApp Image 2026-08-07 at 18.49.31 (1).jpeg',
      'WhatsApp Image 2026-08-07 at 18.49.32 (1).jpeg',
      'WhatsApp Image 2026-08-07 at 18.49.32.jpeg',
      'WhatsApp Image 2026-08-07 at 18.49.31.jpeg',
      'WhatsApp Image 2026-08-07 at 18.49.29.jpeg',
      'WhatsApp Image 2026-08-07 at 18.49.29 (2).jpeg',
      'WhatsApp Image 2026-08-07 at 18.49.29 (1).jpeg',
      'WhatsApp Image 2026-08-07 at 18.49.30.jpeg',
    ],
  },
];

for (const grupo of grupos) {
  const origem = path.join(raiz, 'img', grupo.origem);
  const destino = path.join(raiz, 'public', 'imoveis', grupo.destino);
  await mkdir(destino, { recursive: true });

  const nomes = grupo.ordem ?? (await readdir(origem))
    .filter((nome) => /\.(jpe?g|png|webp)$/i.test(nome))
    .sort((a, b) => a.localeCompare(b, 'pt-BR', { numeric: true }));

  for (const [indice, nome] of nomes.entries()) {
    const arquivo = path.join(origem, nome);
    const base = path.join(destino, String(indice + 1).padStart(2, '0'));

    await Promise.all([
      sharp(arquivo)
        .rotate()
        .resize({
          width: 1600,
          height: 1600,
          fit: 'inside',
          withoutEnlargement: true,
        })
        .jpeg({ quality: 86, progressive: true, mozjpeg: true })
        .toFile(`${base}.jpg`),
      ...[160, 320, 640, 960].map((largura) =>
        sharp(arquivo)
          .rotate()
          .resize({ width: largura, withoutEnlargement: true })
          .webp({ quality: largura === 160 ? 76 : 82, effort: 5 })
          .toFile(`${base}-${largura}.webp`),
      ),
    ]);
  }

  console.log(`${grupo.origem}: ${nomes.length} fotos preparadas em public/imoveis/${grupo.destino}`);
}
