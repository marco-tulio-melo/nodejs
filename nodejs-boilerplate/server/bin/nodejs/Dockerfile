FROM node:10

RUN mkdir /app
RUN npm install -g yarn
RUN npm install -g nodemon

WORKDIR /app

RUN yarn

EXPOSE 3000

CMD ["yarn", "dev"]
