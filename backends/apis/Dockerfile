FROM node:slim as build

WORKDIR /apis-build

COPY package.json .
COPY package-lock.json .
COPY tsconfig.json .

RUN npm install --non-interactive

COPY src src

RUN npm run build

FROM node:slim

WORKDIR /apis

COPY --from=build /apis-build/package.json .
COPY --from=build /apis-build/package-lock.json .

RUN npm install --non-interactive --production

COPY --from=build /apis-build/dist dist

ENV NODE_ENV=production
ENV PORT=8080

EXPOSE 8080
CMD node dist/index.js
