'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();

server.connection({
  host: process.env.ONEIRIC_API_HOST,
  port: process.env.ONEIRIC_API_PORT
});

server.route({
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    reply('hello');
  }
});

server.start(() => {
  console.log('Oneiric API listening at', server.info.uri);
});

process.on('SIGTERM', () => {
  server.stop({ timeout: 5 * 1000 }, () => {
    process.exit();
  });
});
