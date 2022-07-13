const axios = require('axios');
const cheerio = require('cheerio');

const parseID = require('../utils/topic/parseID');
const urls = require('../constant/urls');
const errors = require('../constant/errors');

module.exports = async (query, page = 1) => {
    let response;
    try {
        response = await axios.get(`${urls.SEARCH}${encodeURIComponent(query)}&p=${page}`);
    } catch (err) {
        return { error: err.message };
    }

    const $ = cheerio.load(response.data, { decodeEntities: false });
    const totalTopicCount = parseInt($(".topic-list-description").text().trim().split(" ")[0]);
    const totalPageCount = Math.ceil(totalTopicCount / 50);
    const topics = [];

    $("#content-body > .topic-list").find("li > a").each((index, element) => {
        const currentElement = $(element);

        const title = currentElement.contents().filter(function () {
            return this.nodeType === 3;
        }).text().trim();

        const totalEntryCount = currentElement.find("small").text() || '1';
        const slug = currentElement.attr("href");
        const topicUrl = `${urls.BASE}${slug}`;
        const id = parseID(slug);

        topics.push({
            id,
            title,
            slug,
            topicUrl,
            totalEntryCount,
        });
    });

    if (topics.length === 0) {
        return { error: errors.SEARCH.NOT_FOUND };
    }

    return searchResults = {
        totalTopicCount,
        totalPageCount,
        topics,
    }
};