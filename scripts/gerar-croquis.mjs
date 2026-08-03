/* ==========================================================================
   GERADOR DE CROQUIS DE EXEMPLO

   Em produção o croqui vem do perímetro REAL da área — shapefile do CAR ou
   do SIGEF, simplificado para ~20 vértices (ver README §Croquis). Este script
   existe só para popular o conteúdo de exemplo com polígonos que tenham a
   irregularidade certa: divisas de imóvel rural têm lados retos longos
   (estrada, cerca de rumo) e lados sinuosos (córrego, talvegue).

   Uso:  node scripts/gerar-croquis.mjs
   ========================================================================== */

// PRNG determinístico — mesmo resultado em todo build.
function mulberry32(a) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function gerar(seed, { lados = 12, sinuoso = 0.35, alongamento = 1 } = {}) {
  const rnd = mulberry32(seed);
  const pts = [];
  // Base radial com raio variável: nunca um círculo, nunca um retângulo.
  for (let i = 0; i < lados; i++) {
    const ang = (i / lados) * Math.PI * 2 + (rnd() - 0.5) * 0.22;
    const r = 0.62 + rnd() * 0.38;
    pts.push([Math.cos(ang) * r * alongamento, Math.sin(ang) * r]);
  }
  // Um trecho contíguo vira "córrego": muitos vértices curtos e trêmulos.
  const ini = Math.floor(rnd() * lados);
  const qtd = 2 + Math.floor(rnd() * 3);
  const saida = [];
  for (let i = 0; i < lados; i++) {
    const p = pts[i];
    saida.push(p);
    const dentroDoTrecho =
      (i - ini + lados) % lados < qtd && rnd() < 0.85;
    if (dentroDoTrecho) {
      const q = pts[(i + 1) % lados];
      const n = 2 + Math.floor(rnd() * 2);
      for (let k = 1; k <= n; k++) {
        const t = k / (n + 1);
        const mx = p[0] + (q[0] - p[0]) * t;
        const my = p[1] + (q[1] - p[1]) * t;
        saida.push([
          mx + (rnd() - 0.5) * sinuoso * 0.5,
          my + (rnd() - 0.5) * sinuoso * 0.5,
        ]);
      }
    }
  }
  // Normaliza para o viewBox 0 0 100 100 com 6% de margem.
  const xs = saida.map((p) => p[0]);
  const ys = saida.map((p) => p[1]);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const esc = 88 / Math.max(maxX - minX, maxY - minY);
  const offX = (100 - (maxX - minX) * esc) / 2;
  const offY = (100 - (maxY - minY) * esc) / 2;

  const d = saida
    .map(([x, y], i) => {
      const px = ((x - minX) * esc + offX).toFixed(1);
      const py = ((y - minY) * esc + offY).toFixed(1);
      return `${i === 0 ? 'M' : 'L'}${px} ${py}`;
    })
    .join(' ');
  return `${d} Z`;
}

const specs = [
  ['FA-0142', 4211, { lados: 13, sinuoso: 0.5, alongamento: 1.15 }],
  ['CH-0088', 9137, { lados: 10, sinuoso: 0.25, alongamento: 0.9 }],
  ['FA-0207', 2688, { lados: 15, sinuoso: 0.45, alongamento: 1.3 }],
  ['SI-0163', 7754, { lados: 11, sinuoso: 0.3, alongamento: 1 }],
  ['FA-0231', 3390, { lados: 14, sinuoso: 0.55, alongamento: 1.2 }],
  ['CH-0119', 5502, { lados: 9, sinuoso: 0.2, alongamento: 0.85 }],
  ['TE-0074', 8046, { lados: 8, sinuoso: 0.15, alongamento: 1.45 }],
  ['FA-0155', 1274, { lados: 16, sinuoso: 0.5, alongamento: 1.05 }],
  ['SI-0198', 6613, { lados: 12, sinuoso: 0.35, alongamento: 0.95 }],
];

for (const [codigo, seed, opts] of specs) {
  console.log(`${codigo}:`);
  console.log(`  ${gerar(seed, opts)}`);
  console.log('');
}
