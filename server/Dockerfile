# STAGE I
FROM node:16-alpine3.15 AS builder

WORKDIR /app

COPY ./package.json .

RUN apk add --no-cache python3 py3-pip make g++
RUN npm install

# STAGE II
FROM node:16-alpine3.15
WORKDIR /app

COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /usr/local/lib/ /usr/local/lib/
COPY --from=builder /usr/local/bin/ /usr/local/bin/

# Add code
COPY . .

CMD npm start
