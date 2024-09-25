.PHONY: build deploy-prod

env:
	npm install -g netlify-cli

link:
	@export NETLIFY_AUTH_TOKEN=$NETLIFY_ACCES_TOKEN && \
	netlify link --id 7df867ca-51c2-41bd-b95e-f25b330f16cc

build:
	@export NETLIFY_AUTH_TOKEN=nfp_UiyBEBCBLMgWMi1H2rqp7EPuCuvKXZC959e3 && \
	netlify build

deploy-prod:
	@export NETLIFY_AUTH_TOKEN=nfp_UiyBEBCBLMgWMi1H2rqp7EPuCuvKXZC959e3 && \
    netlify deploy --dir=build --prod

deploy-staging:
	@export NETLIFY_AUTH_TOKEN=nfp_UiyBEBCBLMgWMi1H2rqp7EPuCuvKXZC959e3 && \
	netlify deploy --dir=build