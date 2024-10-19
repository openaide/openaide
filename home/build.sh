#!/bin/bash
set -e

function get_docker() {
    echo "docker is required to run this script."
    echo "see https://www.docker.com/get-started/"
    exit 1
}

command -v docker &>/dev/null || get_docker


# build image
docker buildx bake home

##
