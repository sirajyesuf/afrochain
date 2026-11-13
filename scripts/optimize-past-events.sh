#!/usr/bin/env bash
# Optimize past-event photos for the web.
#
# Scans public/past-events/*.jpg and converts any file that does not yet have
# a WebP counterpart in public/past-events/web/ to an 800x800 WebP at
# quality 80. Originals are never modified. Rerun after dropping new photos.
#
# Usage: bash scripts/optimize-past-events.sh
set -euo pipefail

SRC_DIR="public/past-events"
OUT_DIR="public/past-events/web"
SIZE=800
QUALITY=80

mkdir -p "$OUT_DIR"

if ! command -v magick >/dev/null 2>&1; then
  echo "error: ImageMagick v7 (magick) is required" >&2
  exit 1
fi

before_total=0
after_total=0
converted=0

for src in "$SRC_DIR"/*.jpg; do
  [ -e "$src" ] || continue
  name="$(basename "$src" .jpg)"
  out="$OUT_DIR/$name.webp"

  if [ -e "$out" ]; then
    echo "skip  $name (already optimized)"
    continue
  fi

  src_bytes=$(stat -c%s "$src")
  magick "$src" -resize "${SIZE}x${SIZE}" -quality "$QUALITY" "$out"
  out_bytes=$(stat -c%s "$out")

  before_total=$((before_total + src_bytes))
  after_total=$((after_total + out_bytes))
  converted=$((converted + 1))

  printf 'done  %-32s %8s -> %8s\n' "$name" \
    "$(numfmt --to=iec --suffix=B "$src_bytes")" \
    "$(numfmt --to=iec --suffix=B "$out_bytes")"
done

if [ "$converted" -eq 0 ]; then
  echo "nothing to do - every source photo already has a WebP counterpart"
else
  echo
  echo "converted: $converted photo(s)"
  echo "total: $(numfmt --to=iec --suffix=B "$before_total") -> $(numfmt --to=iec --suffix=B "$after_total")"
fi
