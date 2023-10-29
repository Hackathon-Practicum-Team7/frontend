FROM node:18

COPY package*.json  ./
WORKDIR /app
COPY . .

RUN npm install
RUN npm run build-prod
CMD cp -r build-prod/. result_build
