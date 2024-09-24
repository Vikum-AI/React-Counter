.PHONY: build deploy-prod

env:
	curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
	nvm install 16.15.0
	npm install -g netlify-cli

build:
	@export NETLIFY_AUTH_TOKEN=$$(grep NETLIFY_ACCES_TOKEN .env | cut -d '=' -f2) && \
	netlify build

deploy-prod:
	@export NETLIFY_AUTH_TOKEN=$$(grep NETLIFY_ACCES_TOKEN .env | cut -d '=' -f2) && \
    netlify deploy --dir=build --prod

deploy-staging:
	@export NETLIFY_AUTH_TOKEN=$$(grep NETLIFY_ACCES_TOKEN .env | cut -d '=' -f2) && \
	netlify deploy --dir=build