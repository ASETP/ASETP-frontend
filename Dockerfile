# 使用 Node.js 的 LTS 版本作为基础镜像
FROM nginx

COPY ./dist /opt/asetp/frontCode

COPY ./nginx_default.conf /etc/nginx/nginx.conf
COPY ./default.conf /etc/nginx/conf.d/default.conf