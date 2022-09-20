FROM node:16.16.0

ARG REACT_APP_ENV
ENV REACT_APP_ENV=${REACT_APP_ENV}

WORKDIR /usr/src/app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
RUN npm install react-scripts -g
RUN npm install

COPY . .
CMD [ "npm", "run", "dev" ]