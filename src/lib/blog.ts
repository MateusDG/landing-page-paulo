export const categoriasBlog = {
  compra: 'Compra de imóvel rural',
  documentacao: 'Documentação rural',
  visita: 'Visita e avaliação',
  'uso-da-terra': 'Uso da terra',
} as const;

export type CategoriaBlog = keyof typeof categoriasBlog;

export function rotuloCategoriaBlog(categoria: CategoriaBlog): string {
  return categoriasBlog[categoria];
}

export function tempoLeitura(markdown: string | undefined): number {
  if (!markdown) return 1;

  const texto = markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[#>*_`~|-]/g, ' ');
  const palavras = texto.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(palavras / 210));
}
