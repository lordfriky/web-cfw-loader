#!/bin/bash

# To-do: Use jq for everything instead of sed, grep and cut

# Actual versions
AMS_VERSION=$(sed -n 5p payloads/payloads.json | cut -d '"' -f4)
HKT_VERSION=$(sed -n 10p payloads/payloads.json | cut -d '"' -f4)
TEX_VERSION=$(sed -n 15p payloads/payloads.json | cut -d '"' -f4)

# Latest versions
AMS_LATEST=$(curl -s https://api.github.com/repos/Atmosphere-NX/Atmosphere/releases | jq '.[0]' | grep tag_name | cut -d '"' -f4)
HKT_LATEST=$(curl -s https://api.github.com/repos/CTCaer/hekate/releases | jq '.[0]' | grep tag_name | cut -d '"' -f4)
TEX_LATEST=$(curl -s https://api.github.com/repos/suchmememanyskill/TegraExplorer/releases | jq '.[0]' | grep tag_name | cut -d '"' -f4)

if [ -d payloads/temp ];
then
  echo "Leftover temp directory detected. Deleting it..."
  rm -r payloads/temp
fi

mkdir payloads/temp && cd payloads/temp
UPDATE=false

if [[ "$AMS_VERSION" != "$AMS_LATEST" ]];
then
  echo "Newest Atmosphere version detected ($AMS_LATEST). Updating..."
  UPDATE=true
  rm ../ams-*.bin
  wget $(curl -s https://api.github.com/repos/Atmosphere-NX/Atmosphere/releases | jq '.[0]' | grep browser_download_url | grep fusee.bin | cut -d '"' -f4)
  mv fusee.bin ../ams-$AMS_LATEST.bin

  jq --arg version "$AMS_LATEST" '.payloads[0].version |= $version' ../payloads.json | jq --arg path "payloads/ams-$AMS_LATEST.bin" '.payloads[0].path |= $path' > ../payloads_temp.json
  mv ../payloads_temp.json ../payloads.json
  echo "Atmosphere successfully updated! "
fi

if [[ "$HKT_VERSION" != "$HKT_LATEST" ]];
then
  echo "Newest Hekate version detected ($HKT_LATEST). Updating..."
  UPDATE=true
  rm ../hekate-*.bin
  wget $(curl -s https://api.github.com/repos/CTCaer/hekate/releases | jq '.[0]' | grep browser_download_url | grep "hekate_ctcaer_.*\.zip" | cut -d '"' -f4)
  unzip hekate_ctcaer_*.zip
  mv hekate_ctcaer_*.bin ../hekate-$HKT_LATEST.bin

  jq --arg version "$HKT_LATEST" '.payloads[1].version |= $version' ../payloads.json | jq --arg path "payloads/hekate-$HKT_LATEST.bin" '.payloads[1].path |= $path' > ../payloads_temp.json
  mv ../payloads_temp.json ../payloads.json
  echo "Hekate successfully updated!"
fi

if [[ "$TEX_VERSION" != "$TEX_LATEST" ]];
then
  echo "Newset TegraExplorer version detected ($TEX_LATEST). Updating..."
  UPDATE=true
  rm ../tegraexplorer-*.bin
  wget $(curl -s https://api.github.com/repos/suchmememanyskill/TegraExplorer/releases | jq '.[0]' | grep browser_download_url | grep TegraExplorer.bin | cut -d '"' -f4)
  mv TegraExplorer.bin ../tegraexplorer-$TEX_LATEST.bin

  jq --arg version "$TEX_LATEST" '.payloads[2].version |= $version' ../payloads.json | jq --arg path "payloads/tegraexplorer-$TEX_LATEST.bin" '.payloads[2].path |= $path' > ../payloads_temp.json
  mv ../payloads_temp.json ../payloads.json
  echo 'TegraExplorer successfully updated!'
fi

cd ../.. && rm -r payloads/temp

if [[ -n "$GITHUB_ACTIONS" ]];
then
  echo "UPDATE=$UPDATE" >> $GITHUB_ENV
fi

echo "Update complete."
