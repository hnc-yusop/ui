FROM nginx:latest

COPY ssl /rancher-ui/ssl

COPY rancher-ui.conf /etc/nginx/conf.d

COPY /dist/static /rancher-ui/www
