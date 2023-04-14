FROM node:19.8.1

WORKDIR /NODE-BACKEND

COPY package.json .

RUN npm i

COPY . .

CMD ["npm", "start"]