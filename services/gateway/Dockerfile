FROM node:22.14.0-alpine AS deps
WORKDIR /srv/gateway
COPY package.json ./

FROM node:22.14.0-alpine
WORKDIR /srv/gateway
COPY --from=deps /srv/gateway/package.json ./
COPY src ./src
USER node
EXPOSE 8080
CMD ["node", "src/server.ts"]
