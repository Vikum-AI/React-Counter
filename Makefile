.PHONY: build deploy-prod

env:
	npm install -g netlify-cli

link:
	@export NETLIFY_AUTH_TOKEN=$$(grep NETLIFY_ACCES_TOKEN .env | cut -d '=' -f2) && \
	netlify link --id 7df867ca-51c2-41bd-b95e-f25b330f16cc

build:
	@export NETLIFY_AUTH_TOKEN=$NETLIFY_ACCES_TOKEN && \
	netlify build

deploy-prod:
	@export NETLIFY_AUTH_TOKEN=$NETLIFY_ACCES_TOKEN && \
    netlify deploy --dir=build --prod

deploy-staging:
	@export NETLIFY_AUTH_TOKEN=$NETLIFY_ACCES_TOKEN && \
	netlify deploy --dir=build