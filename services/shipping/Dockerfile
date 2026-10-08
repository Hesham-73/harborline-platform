FROM node:22.14.0-alpine AS deps
WORKDIR /srv/shipping
COPY package.json ./

FROM node:22.14.0-alpine
WORKDIR /srv/shipping
COPY --from=deps /srv/shipping/package.json ./
COPY src ./src
USER node
EXPOSE 8080
CMD ["node", "src/server.ts"]
