FROM node:22.14.0-alpine AS deps
WORKDIR /srv/storefront
COPY package.json ./

FROM node:22.14.0-alpine
WORKDIR /srv/storefront
COPY --from=deps /srv/storefront/package.json ./
COPY src ./src
USER node
EXPOSE 8080
CMD ["node", "src/client.ts"]
