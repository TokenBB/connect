FROM node:8.2.0

ARG STEEMD_URL
ENV STEEMD_URL=$STEEMD_URL

RUN printenv

RUN npm install -g yarn

ENV PORT 80
ENV NODE_ENV development

WORKDIR /var/app
RUN mkdir -p /var/app
COPY ./packages/steemconnect /var/app
RUN yarn

ENV NODE_ENV production

RUN npm run build

EXPOSE 80

CMD [ "yarn", "run", "start" ]