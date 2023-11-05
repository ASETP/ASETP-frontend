# 使用 Node.js 的 LTS 版本作为基础镜像
FROM nginx as build-stage

# 设置工作目录
WORKDIR /frontCode

RUN rm /etc/nginx/conf.d/default.conf
ADD default.conf /etc/nginx/conf.d/

COPY dist/ /frontCode/dist/
