#!/bin/bash

set -e

cd icones:pictos:vectoriel_flat
find . -name "*.svg" | while read ico; do
  echo "$ico"
  OUT=${ico#.\/}
  OUT=${OUT//\//-}

  WH=`identify -format '%w-%h' "${ico}"`
  W=${WH%-*}
  H=${WH#*-}

  if (( H > W )); then
    RESIZE_11="-h 11"
  else
    RESIZE_11="-w 11"
  fi

  rsvg-convert --keep-aspect-ratio $RESIZE_11 -f svg "$ico" -o "../svg/_$OUT"
  ruby ../scripts/resize.rb "../svg/_$OUT" > "../svg/$OUT"
  rm "../svg/_$OUT"
done
