const express = require('express');
const topic = require('../controllers/topic/topic');
const topicList = require('../controllers/topic/topicList');
const entry = require('../controllers/entry/entry');
const debe = require('../controllers/index/debe');
const user = require('../controllers/user/user');
const page = require('../controllers/user/page');
const search = require('../controllers/index/search');
const autoComplete = require('../controllers/index/autoComplete');
const allChannels = require('../controllers/index/allChannels');

const router = express.Router();

let response;

/* GET topic channel listing. */
router.get('/topic/list/channel/:choice/:page?', async (req, res, next) => {
  response = await topicList(req.params.choice, req.params.page, true);
  res.json(response);
});

/* GET topic listing. */
router.get('/topic/list/:choice/:page?', async (req, res, next) => {
  response = await topicList(req.params.choice, req.params.page);
  res.json(response);
});

/* GET single thread */
router.get('/topic/:slug/:page?', async (req, res, next) => {
  response = await topic(req.params.slug, req.params.page);
  if (response.redirect) {
    res.redirect(response.redirect);
  }
  else {
    res.json(response);
  }
});

/* GET single entry */
router.get('/entry/:id', async (req, res, next) => {
    response = await entry(req.params.id);
    res.json(response);
});

/* GET debe entries listing. */
router.get('/index/debe', async (req, res, next) => {
  response = await debe();
  res.json(response);
});

/* GET user entry pages */
router.get('/user/:nick/:choice/:page?', async (req, res, next) => {
  response = await page(req.params.nick, req.params.choice, req.params.page);
  res.json(response);
});

/* GET user profile */
router.get('/user/:nick', async (req, res, next) => {
  response = await user(req.params.nick);
  res.json(response);
});

/* GET search result */
router.get('/index/search/:query/:page?', async (req, res, next) => {
  response = await search(req.params.query, req.params.page);
  res.json(response);
});

/* GET autocomplete search result */
router.get('/index/autocomplete/:query', async (req, res, next) => {
  response = await autoComplete(req.params.query);
  res.json(response);
});

/* GET all channels */
router.get('/index/channels', async (req, res, next) => {
  response = await allChannels();
  res.json(response);
});

module.exports = router;