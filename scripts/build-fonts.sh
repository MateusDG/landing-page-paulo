#!/usr/bin/env bash
# Wrapper: garante a .venv com fonttools+brotli e roda o gerador de fontes.
# Detalhes e justificativa das escolhas: scripts/build-fonts.py
set -euo pipefail
cd "$(dirname "$0")/.."

if [ ! -x .venv/bin/pyftsubset ]; then
  echo "→ criando .venv com fonttools + brotli"
  python3 -m venv .venv
  ./.venv/bin/pip install -q --disable-pip-version-check "fonttools[woff]" brotli
fi

./.venv/bin/python scripts/build-fonts.py
