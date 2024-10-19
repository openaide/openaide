#!/bin/bash
set -xeuo pipefail

function source_env() {
  if [ -f .env ]; then
    export "$(grep -v '#' .env | xargs)"
  fi
}

##
source_env

export WEB_PORT="${WEB_PORT:-80}"
export ADMIN_PORT="${ADMIN_PORT:-8080}"

##
DOMAIN="openaide.localhost"
URLS=(
# welcome home page
"http://home.${DOMAIN}:${WEB_PORT}/"
#
"http://redisinsight.${DOMAIN}:${WEB_PORT}/"
"http://redis-commander.${DOMAIN}:${WEB_PORT}/"
"http://pgadmin4.${DOMAIN}:${WEB_PORT}/"
"http://minio.${DOMAIN}:${WEB_PORT}/"
# traefik dashboard
"http://traefik.${DOMAIN}:${ADMIN_PORT}/"
# whoami
"http://whoami.${DOMAIN}:${WEB_PORT}/"
)

DATA_DIR="openaide"

##
function chrome() {
  case "$OSTYPE" in
    linux*)
      google-chrome "$@" --user-data-dir=/tmp/"$DATA_DIR" "${URLS[@]}"
      ;;
    darwin*)
      open -n -a "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --args "$@" --user-data-dir=/tmp/"$DATA_DIR" "${URLS[@]}"
      ;;
    msys*)
      "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" "$@" --disable-gpu --user-data-dir=~/temp/"$DATA_DIR" "${URLS[@]}"
      ;;
    *)
      echo "$OSTYPE not supported"
      ;;
  esac
}

chrome "$@"
##