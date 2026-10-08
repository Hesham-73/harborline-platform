FROM node:22.14.0-alpine AS deps
WORKDIR /srv/checkout
COPY package.json ./

FROM node:22.14.0-alpine
WORKDIR /srv/checkout
COPY --from=deps /srv/checkout/package.json ./
COPY src ./src
USER node
EXPOSE 8080
CMD ["node", "src/server.ts"]
