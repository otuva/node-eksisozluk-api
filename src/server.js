const express = require('express');

const chalk = require('chalk');
const config = require('./config');
const app = require('./server/app');
const router = require('./server/router');

const port = process.env.PORT || 3000;

if (config.doc.enabled) {
    console.log(process.cwd())
    app.use(config.doc.endpoint, express.static('doc/public'));
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
    //.....
    console.log(chalk.yellow('..................................'));
    console.log(chalk.green(`=====[ ${config.api.name} ]=====`));
    console.log(chalk.green(`Port:\t\t\t${config.api.port}`));
    console.log(chalk.green(`API Endpoint:\t\t${config.api.endpoint}`));
    console.log(chalk.green("\ndatabase connection is established"));
    console.log(chalk.yellow('..................................'));
    console.log(chalk.blue(`eksisozluk-api running on http://localhost:${port}\n`));
});