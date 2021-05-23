#!/bin/bash

set -e

curl $icones_pictos_vectoriel > icones_pictos_vectoriel.zip

rm -fr 'icones:pictos:vectoriel'
unzip icones_pictos_vectoriel.zip
rm -r "icones:pictos:vectoriel/reserve"

mkdir -p svg
rm -f svg/*
bash scripts/flat_ico.sh

rm -f teritorio-tourism/*
mkdir -p teritorio-tourism
npx fantasticon svg --name teritorio-tourism --prefix teritorio-tourism -o teritorio-tourism
