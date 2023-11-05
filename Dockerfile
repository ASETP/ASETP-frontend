# 使用 Node.js 的 LTS 版本作为基础镜像
FROM node:lts as build-stage

# 设置工作目录
WORKDIR /frontCode

# 复制 package.json 和 package-lock.json 文件并安装依赖
COPY ./package.json /frontCode/package.json
COPY ./jsconfig.json /frontCode/jsconfig.json
COPY ./package-lock.json /frontCode/package-lock.json
COPY ./vue.config.js /frontCode/vue.config.js
RUN npm install

# 复制整个项目源代码并构建静态文件
COPY ./src /frontCode/src
RUN npm run build

CMD["node", "/frontCode/dist/index.html"]