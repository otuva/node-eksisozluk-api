#!/usr/bin/env node
const server = require('./src/server');

if (require.main === module) {
    server.startServer();
}
else {
    module.exports = require('./src/controllers/controllerApi');
}
