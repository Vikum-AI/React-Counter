.PHONY: build deploy-prod

env:
	npm install -g netlify-cli

build:
	@export NETLIFY_AUTH_TOKEN=$NETLIFY_ACCES_TOKEN && \
	netlify build

deploy-prod:
	@export NETLIFY_AUTH_TOKEN=$NETLIFY_ACCES_TOKEN && \
    netlify deploy --dir=build --prod

deploy-staging:
	@export NETLIFY_AUTH_TOKEN=$NETLIFY_ACCES_TOKEN && \
	netlify deploy --dir=build