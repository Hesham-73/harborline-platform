FROM node:22.14.0-alpine AS deps
WORKDIR /srv/search
COPY package.json ./

FROM node:22.14.0-alpine
WORKDIR /srv/search
COPY --from=deps /srv/search/package.json ./
COPY src ./src
USER node
EXPOSE 8080
CMD ["node", "src/server.ts"]
