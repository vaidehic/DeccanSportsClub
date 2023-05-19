# Stage 1
FROM node:14.20.0 as node
WORKDIR /app
COPY . .
# Stage 2
FROM nginx:1.23.3
COPY --from=node /app/dist/sport-club/ /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/
