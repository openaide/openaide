#
# make
#
.DEFAULT_GOAL := help

.PHONY: help
help: Makefile
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

##
start: create-net ## Start all services
	@./openaide.sh start
	
stop:  ## Stop all services
	@./openaide.sh stop

build: ## Build all services
	@./openaide.sh build

ps: ## Show status
	@./openaide.sh ps

info: ## Show info
	@./openaide.sh info

create-net: ## Create network
	@echo "Creating network..."
	@docker network inspect openland >/dev/null 2>&1 \
		|| docker network create openland

visit: ## Launch browser
	@./chrome.sh

.PHONY: start stop build update ps create-net visit
##
