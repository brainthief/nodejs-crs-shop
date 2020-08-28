FROM node:12
ENV PORT 3000
WORKDIR /usr/app
COPY . /usr/app
RUN npm install -g nodemon
RUN npm install
ENTRYPOINT ["npm", "start"]