const axios = require('axios');
const cheerio = require('cheerio');
const urls = require('../constant/urls');
const config = require('../config');
const parseSingleEntry = require('../utils/entry/parseSingleEntry');

module.exports = async (nick, page) => {
    let response;
    try {
        // https://eksisozluk.com/son-entryleri?nick=ssg&p=1
        response = await axios.get(`${urls.ENTRY_PAGE}${nick}&p=${parseInt(page)}`, {
            "headers": config.asyncRequestHeaders
        });
    } catch (err) {
        return { error: err.message };
    }

    const $ = cheerio.load(response.data, { decodeEntities: false });
    const entries = [];

    $('.topic-item').each((index, element) => {
        const entry = parseSingleEntry($(element).html());
    });

    console.log(items);
};