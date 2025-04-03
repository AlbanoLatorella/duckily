FROM nginx:alpine

COPY ./dist /var/www/html
COPY ./default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
