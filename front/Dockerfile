FROM node:lts-alpine

WORKDIR /app

COPY public public
COPY tsconfig.json tsconfig.json
COPY codegen.ts codegen.ts

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY src src

CMD npm start