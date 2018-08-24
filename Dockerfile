FROM node:8.2.0

ARG STEEMD_URL
ENV STEEMD_URL=$STEEMD_URL

RUN printenv

ENV PORT 80
ENV NODE_ENV development

WORKDIR /var/app
RUN mkdir -p /var/app
COPY ./packages/steemconnect /var/app
COPY ./.env /var/app/
COPY ./packages/steem-js /var/app/node_modules/@steemit/steem-js

RUN npm run build

EXPOSE 80

CMD [ "npm", "start" ]
