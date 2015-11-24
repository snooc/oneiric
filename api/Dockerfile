FROM node:5

MAINTAINER Cody Coons <cody@codycoons.com>

ENV ONEIRIC_API_SRC /usr/src/oneiric-api
ENV ONEIRIC_API_HOST 0.0.0.0
ENV ONEIRIC_API_PORT 80

RUN mkdir -p ${ONEIRIC_API_SRC}
WORKDIR ${ONEIRIC_API_SRC}

COPY package.json ${ONEIRIC_API_SRC}
RUN npm install
COPY . ${ONEIRIC_API_SRC}

CMD [ "node", "server.js" ]
