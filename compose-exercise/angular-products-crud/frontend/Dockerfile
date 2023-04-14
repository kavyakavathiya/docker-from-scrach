FROM node:19.8.1

WORKDIR /NODE-FRONTEND

COPY package.json .

RUN npm i

RUN npm install -g @angular/cli

COPY . .

CMD ["npm", "start"]