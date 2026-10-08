FROM node:22.14.0-alpine AS deps
WORKDIR /srv/inventory
COPY package.json ./

FROM node:22.14.0-alpine
WORKDIR /srv/inventory
COPY --from=deps /srv/inventory/package.json ./
COPY src ./src
USER node
EXPOSE 8080
CMD ["node", "src/server.ts"]
