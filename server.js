#!/usr/bin/env node

const express = require('express');
const chalk = require('chalk');
const config = require('./src/config');
const path = require('path');
const app = require('./src/server/app');
const router = require('./src/server/router');

const port = process.env.PORT || 3000;

if (config.doc.enabled) {
    app.use(config.doc.endpoint, express.static(path.join(__dirname, "doc","public")));
    
}

if (config.api.limiting.enabled) {
    const rateLimit = require("express-rate-limit");
    const limiter = rateLimit({
      windowMs: config.api.limiting.windowMs,
      max: config.api.limiting.max
    });
     
    //  apply to all requests
    app.use(limiter);
}

app.use(config.api.endpoint, router); // use the api router for all requests to the api endpoint

// start the server
app.listen(port, () => {
    console.log(chalk.blue(process.cwd()))
    console.log(chalk.yellow('............................'));
    console.log(chalk.green(`=====[ ${config.api.name} ]=====`));
    console.log(chalk.green(`Port:\t\t\t${config.api.port}`));
    console.log(chalk.green(`API Endpoint:\t\t${config.api.endpoint}`));
    if (config.doc.enabled) console.log(chalk.green(`Doc Endpoint:\t\t${config.doc.endpoint}`));
    console.log(chalk.yellow('............................'));
    console.log(chalk.blue(`eksisozluk-api running on http://localhost:${port}\n`));
});