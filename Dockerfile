FROM node:16.19.1

WORKDIR /app

COPY . /app

RUN npm install

RUN --mount=type=secret,id=_env,dst=/etc/secrets/.env cat /run/secrets/.env

RUN npx webpack

EXPOSE 3000

CMD ["npm", "start"]