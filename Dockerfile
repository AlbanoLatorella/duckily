
FROM nginx:alpine

# Create directory for SSL certificates
RUN mkdir -p /etc/nginx/ssl

# Placeholder self-signed certificate for development
# In production, these should be mounted as volumes or built into a custom image
RUN apk add --no-cache openssl && \
    openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
    -keyout /etc/nginx/ssl/key.pem \
    -out /etc/nginx/ssl/cert.pem \
    -subj "/C=US/ST=State/L=City/O=Organization/CN=localhost" && \
    chmod 644 /etc/nginx/ssl/key.pem /etc/nginx/ssl/cert.pem

COPY ./dist /var/www/html
COPY ./default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80 443

