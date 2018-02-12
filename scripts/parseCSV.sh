#!/usr/bin/env bash

echo "Parsing csv file to json"
node_modules/csvtojson/bin/csvtojson --delimiter="," --flatKeys=true data/*-radar.csv > src/assets/converted-radar.json
node_modules/csvtojson/bin/csvtojson --delimiter="," --flatKeys=true data/*-skill.csv > src/assets/converted-skill.json
echo "Done"
