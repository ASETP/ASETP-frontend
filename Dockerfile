FROM nginx

COPY ./dist /opt/asetp/frontCode

COPY ./nginx_default.conf /etc/nginx/nginx.conf
COPY ./default.conf /etc/nginx/conf.d/default.conf

FROM node

CMD ["node", "/opt/asetp/frontCode/js/app.ae2810e9.js"]