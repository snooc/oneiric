#!/bin/bash
set -e

docker-compose --file docker-compose.yml --file docker-compose.dev.yml $@
