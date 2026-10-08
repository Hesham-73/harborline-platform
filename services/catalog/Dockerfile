FROM node:22.14.0-alpine AS deps
WORKDIR /srv/catalog
COPY package.json ./

FROM node:22.14.0-alpine
WORKDIR /srv/catalog
COPY --from=deps /srv/catalog/package.json ./
COPY src ./src
USER node
EXPOSE 8080
CMD ["node", "src/server.ts"]
