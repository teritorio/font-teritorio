#!/bin/bash

set -e

curl https://drive.teritorio.fr/index.php/s/FWntdw9fF3qnLW7/download > icones_pictos_vectoriel.zip

rm -fr 'icones:pictos:vectoriel_flat'
unzip icones_pictos_vectoriel.zip

mkdir -p svg
rm -f svg/*
mv icones:pictos:vectoriel_flat/icons/*.svg icones:pictos:vectoriel_flat/
bash scripts/flat_ico.sh

rm -f teritorio/*
mkdir -p teritorio
npx fantasticon svg --name teritorio --prefix teritorio -o teritorio
