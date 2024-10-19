#
# make
#
.DEFAULT_GOAL := help

.PHONY: help
help: Makefile
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

##
build: ## Build home app
	@echo "Building..."
	@pnpm install && pnpm build

tidy: ## Tidy the code
	@echo "Tidying..."
	@pnpm type-check
	@pnpm lint
	@pnpm format:write

dev: ## Run the app on host
	@echo "Running on host ..."
	@pnpm install && pnpm dev

clean: ## Clean up
	@echo "Cleaning up..."
	@rm -rf node_modules pnpm-lock.yaml

image: ## Build all imaged
	@echo "Building docker images..."
	@./build.sh

update: ## Pull latest images
	@echo "Updating images..."
	@docker compose pull --policy=always --ignore-buildable

up: create-net ## Start core services
	@echo "Starting services..."
	@docker compose up --remove-orphans -d

down: ## Stop core services
	@echo "Stopping services..."
	@docker compose down

ps: ## Show status of core services
	@echo "Status of services..."
	@docker compose ps

create-net: ## Create network
	@echo "Creating network..."
	@docker network inspect openland >/dev/null 2>&1 \
		|| docker network create openland

.PHONY: build tidy dev clean image update up down ps create-net
##
