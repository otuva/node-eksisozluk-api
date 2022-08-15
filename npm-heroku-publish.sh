#!/bin/bash

echo "current version: $(npm version | grep 'eksisozluk-api' )"
read -rp "enter new version: " nversion
npm version $nversion
npm publish
git push heroku master
