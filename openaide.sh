#!/bin/bash
set -e

function get_docker() {
    echo "docker is required to run this script."
    echo "see https://www.docker.com/get-started/"
    exit 1
}

command -v docker &>/dev/null || get_docker

##
function check_git_repo() {
    git rev-parse --is-inside-work-tree &> /dev/null
}

function get_repo_base_path() {
    git rev-parse --show-toplevel
}

function build_all() {
    cd "$REPO_PATH/home" && docker buildx bake home
    cd "$REPO_PATH/perpetis" && docker buildx bake postgres srh
}

function start_all() {
    cd "$REPO_PATH/home" && docker compose up -d
    cd "$REPO_PATH/perpetis" && docker compose up -d
}

function stop_all() {
    cd "$REPO_PATH/home" && docker compose down
    cd "$REPO_PATH/perpetis" && docker compose down
}

function status_all() {
    cd "$REPO_PATH/home" && docker compose ps
    cd "$REPO_PATH/perpetis" && docker compose ps
}

function info_all() {
    cd "$REPO_PATH/home" && docker compose ps --format "table {{.Names}}\t{{.Ports}}"
    cd "$REPO_PATH/perpetis" && docker compose ps --format "table {{.Names}}\t{{.Ports}}"
}

#
function usage() {
  echo "$0 help | start | stop | status"
  echo
  echo "help            this help message"
  echo "build           build services"
  echo "start           start services"
  echo "stop            stop services"
  echo "status          show containers"
  echo "info            show info"
  echo ""
}

##
if check_git_repo; then
    REPO_PATH=$(get_repo_base_path)
else
    echo "The $0 needs to run inside the openaide repo"
    exit 1
fi

#
cd "$REPO_PATH" || { echo "Repo not found: $REPO_PATH"; exit 1; }

#
if [ $# == 0 ]; then
    usage
    exit 1
fi

case "$1" in
    build)
        build_all
        ;;
    start)
        start_all
        ;;
    stop)
        stop_all
        ;;
    ps|status*)
        status_all
        ;;
    info)
        info_all
        ;;
    *)
        usage
        exit 1
        ;;
esac

###
