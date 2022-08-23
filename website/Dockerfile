# Stage I
FROM node:16-alpine3.15 AS npm-package-builder

WORKDIR /app

COPY ./package.json .

RUN npm install

# Stage II
FROM node:16-alpine3.15 AS react-builder
WORKDIR /app

COPY --from=npm-package-builder /app/node_modules /app/node_modules
COPY --from=npm-package-builder /app/package-lock.json /app/package-lock.json
COPY --from=npm-package-builder /app/package.json /app/package.json

COPY ./src ./src
COPY ./public ./public

RUN DISABLE_ESLINT_PLUGIN=true npm run build

# Stage III
FROM nginx:1.21.5-alpine
COPY --from=react-builder /app/build /web
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./nginx/default.conf.template /etc/nginx/templates/default.conf.template

CMD ["nginx", "-g", "daemon off;"]
