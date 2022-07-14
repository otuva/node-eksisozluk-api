const axios = require('axios');
const cheerio = require('cheerio');
const urls = require('../constant/urls');
const errors = require('../constant/errors');

module.exports = async () => {
    let response;
    try {
        response = await axios.get(urls.ALL_CHANNELS);
    } catch (err) {
        return { error: err.message };
    }

    const $ = cheerio.load(response.data, { decodeEntities: false });

    const channels = [];

    $('#channel-follow-list').find('li').each((index, element) => {
        const singleChannel = $(element);

        const name = singleChannel.find('a').text();
        const slug = singleChannel.find('a').attr('href');
        const description = singleChannel.find('p').text();

        channels.push({
            name,
            slug,
            description
        });
    });
    return {
        channels
    }
}