#!/usr/bin/env bash

CSV_FILE="$1"
echo "Parsing csv file to json"
node_modules/csvtojson/bin/csvtojson --delimiter="," --flatKeys=true $CSV_FILE > src/assets/converted.json
echo "Done"
