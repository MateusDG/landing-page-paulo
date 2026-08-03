#!/usr/bin/env python3
"""
Gera as fontes auto-hospedadas em public/fonts/.

Por que não usar o CSS do @fontsource direto:
  1. O pacote traz ~8 subsets por família (cirílico, grego, vietnamita...).
     Nada disso é usado em pt-BR — o subset `latin` já cobre ã õ ç á é í ó ú.
  2. O Fraunces "full" tem 4 eixos variáveis e pesa 118 KB. Fixando SOFT e
     WONK nos valores de projeto e limitando o intervalo de peso, cai para
     ~55 KB mantendo o eixo `opsz` — que é o que faz o título de 6.5rem e o
     h3 de 1.375rem terem desenhos diferentes em vez de escala burra.
  3. Fonte auto-hospedada = LCP previsível, zero requisição a terceiros e
     zero discussão de LGPD com CDN de fonte.

Os .woff2 gerados SÃO versionados no repositório, então `npm run build` não
depende de Python. Rode este script apenas quando as fontes mudarem.

    ./scripts/build-fonts.sh
"""
from __future__ import annotations

import subprocess
import sys
import tempfile
from pathlib import Path

from fontTools.ttLib import TTFont
from fontTools.varLib import instancer

RAIZ = Path(__file__).resolve().parent.parent
SAIDA = RAIZ / "public" / "fonts"
PYFTSUBSET = RAIZ / ".venv" / "bin" / "pyftsubset"

# Cobertura de caracteres do site: ASCII + Latin-1 (acentos do português)
# + pontuação tipográfica correta + sinais usados nas fichas e nas cotas
# (°, ′, ″, ×, →, ≤, ≥, ², ³).
UNICODES = ",".join([
    "U+0020-007E", "U+00A0-00FF",
    "U+2010", "U+2013", "U+2014", "U+2018", "U+2019", "U+201C", "U+201D",
    "U+2022", "U+2026", "U+2032", "U+2033", "U+2039", "U+203A", "U+2044",
    "U+2190", "U+2191", "U+2192", "U+2193", "U+2212", "U+2264", "U+2265",
    "U+2260", "U+2713", "U+2717", "U+25CF", "U+25CB", "U+2500", "U+2501",
])

# tnum e lnum são obrigatórios: toda ficha técnica depende de numeral tabular.
FEATURES = ",".join([
    "kern", "liga", "calt", "tnum", "lnum", "onum", "pnum", "zero",
    "frac", "case", "ordn", "sups", "ss01", "ss02", "ss03", "dnom", "numr",
])

FONTES = [
    {
        "origem": "@fontsource-variable/fraunces/files/fraunces-latin-full-normal.woff2",
        "destino": "fraunces-var.woff2",
        # WONK=1 e SOFT=0 são os defaults do Fraunces — fixá-los preserva o
        # desenho e elimina os dados de variação dos dois eixos.
        # `opsz` continua variável de propósito (ver docstring).
        "instancia": {"SOFT": 0, "WONK": 1, "wght": (400, 700)},
    },
    {
        "origem": "@fontsource-variable/inter-tight/files/inter-tight-latin-wght-normal.woff2",
        "destino": "inter-tight-var.woff2",
        "instancia": {"wght": (400, 700)},
    },
    {
        "origem": "@fontsource-variable/jetbrains-mono/files/jetbrains-mono-latin-wght-normal.woff2",
        "destino": "jetbrains-mono-var.woff2",
        "instancia": {"wght": (400, 700)},
    },
]


def kb(caminho: Path) -> float:
    return caminho.stat().st_size / 1024


def gerar(spec: dict, tmp: Path) -> None:
    origem = RAIZ / "node_modules" / spec["origem"]
    if not origem.exists():
        sys.exit(f"não encontrei {origem}\nrode `npm install` antes.")

    intermediario = tmp / (spec["destino"].removesuffix(".woff2") + ".ttf")
    fonte = TTFont(origem)
    instancer.instantiateVariableFont(fonte, spec["instancia"], inplace=True)
    fonte.flavor = None
    fonte.save(intermediario)

    destino = SAIDA / spec["destino"]
    subprocess.run(
        [
            str(PYFTSUBSET), str(intermediario),
            f"--output-file={destino}",
            "--flavor=woff2",
            f"--layout-features={FEATURES}",
            f"--unicodes={UNICODES}",
            "--name-IDs=*", "--name-legacy", "--notdef-outline",
            "--recalc-bounds", "--drop-tables+=DSIG",
        ],
        check=True,
    )
    eixos = [a.axisTag for a in fonte["fvar"].axes] if "fvar" in fonte else ["estática"]
    print(f"  {spec['destino']:<26} {kb(destino):6.1f} KB   eixos: {', '.join(eixos)}")


def main() -> None:
    if not PYFTSUBSET.exists():
        sys.exit(f"não encontrei {PYFTSUBSET} — rode ./scripts/build-fonts.sh")
    SAIDA.mkdir(parents=True, exist_ok=True)
    print(f"Gerando fontes em {SAIDA.relative_to(RAIZ)}/")
    with tempfile.TemporaryDirectory() as td:
        for spec in FONTES:
            gerar(spec, Path(td))
    total = sum(kb(SAIDA / s["destino"]) for s in FONTES)
    print(f"  {'':<26} {total:6.1f} KB   total")


if __name__ == "__main__":
    main()
