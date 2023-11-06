FROM nginx

RUN rm -rf /opt/asetp/frontCode/*
COPY ./dist /opt/asetp/frontCode

COPY ./nginx_default.conf /etc/nginx/nginx.conf
COPY ./default.conf /etc/nginx/conf.d/default.conf