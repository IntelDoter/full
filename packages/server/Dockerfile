FROM node:22

WORKDIR /app
COPY package.json yarn.lock
RUN yarn

COPY entrypoint.sh .
RUN chmod +x entrypoint.sh

COPY index.ts routes.ts .

ENTRYPOINT ["./entrypoint.sh"]
