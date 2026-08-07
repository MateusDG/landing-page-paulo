/**
 * Um rascunho nunca entra em página pública, rota de detalhe, sitemap ou OG.
 * Centralizar a regra evita que uma nova vitrine publique conteúdo incompleto.
 */
export function imovelPublicado(imovel: { data: { rascunho: boolean } }): boolean {
  return !imovel.data.rascunho;
}
