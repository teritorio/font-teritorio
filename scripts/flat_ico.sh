#!/bin/bash

set -e

cd icones:pictos:vectoriel
find . -name "*.svg" | while read ico; do
  echo "$ico"
  OUT=${ico#.\/}
  SUPER_CLASS=${OUT%\/*}
  SUPER_CLASS=${SUPER_CLASS%.*}
  SUPER_CLASS=${SUPER_CLASS%\/*}
  OUT=${OUT//\//-}

  WH=`identify -format '%w-%h' "${ico}"`
  W=${WH%-*}
  H=${WH#*-}

  if (( H > W )); then
    RESIZE_11="-h 11"
  else
    RESIZE_11="-w 11"
  fi

  OUT_B=${OUT}
  rsvg-convert --keep-aspect-ratio $RESIZE_11 -f svg "$ico" -o "../svg/$OUT_B"
  mv "../svg/$OUT_B" "../svg/_$OUT_B"
  ruby ../scripts/resize.rb "../svg/_$OUT_B" > "../svg/$OUT_B"
  rm "../svg/_$OUT_B"
done
