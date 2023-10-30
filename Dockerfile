#FROM node:18
#
#WORKDIR /app
#COPY package*.json  ./
#COPY . .
#
#RUN npm install
#RUN npm run build-prod
#CMD cp -r build-prod/. result_build


FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build-prod
CMD cp -r build result_build
