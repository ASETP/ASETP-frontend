FROM nginx

COPY ./dist /opt/asetp/frontCode

COPY ./nginx_default.conf /etc/nginx/nginx.conf
COPY ./default.conf /etc/nginx/conf.d/default.conf