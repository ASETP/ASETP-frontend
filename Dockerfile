FROM nginx

COPY ./dist /opt/asetp/frontCode

COPY ./nginx_default.conf /etc/nginx/nginx.conf