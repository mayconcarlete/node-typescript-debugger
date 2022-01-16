FROM node:17-alpine as builder

WORKDIR /home/app

COPY . .

RUN npm install

FROM node:17-alpine

WORKDIR /home/app

COPY --from=builder '/home/app/dist' .
COPY --from=builder '/home/app/package.json' .
COPY --from=builder '/home/app/package-lock.json' .

RUN npm install --only=prod

CMD node --inspect=0.0.0.0 index.js
