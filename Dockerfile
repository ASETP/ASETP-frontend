FROM nginx

RUN rm -rf /opt/asetp/frontCode
RUN mkdir /opt/asetp/frontCode
COPY ./dist/ /opt/asetp/frontCode

COPY ./default.conf /etc/nginx/conf.d/default.conf