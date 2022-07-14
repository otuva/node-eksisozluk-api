const axios = require("axios");
const cheerio = require("cheerio");
const urls = require("../constant/urls");
const parseID = require("../utils/topic/parseID");
const errors = require('../constant/errors');
const config = require('../config');
// const parseEntryDateTime = require('../utils/entry/parseEntryDateTime');

module.exports = async (choice, page = 1, channels = false) => {
    // this function is used to get topic list 
    // channels is used to determine whether it is channel or not to reduce code usage
    // default value of page is 1, if there's no page instead of failing, it will return the first page
    // switch statement is used to determine the type of topic list instead of giving user a wildcard
    // hope is that it will be more readable, secure and easier to maintain
    // it's a better idea to fail immediately if choice is not strictly defined
    let urlPath = `${urls.TOPIC}/${encodeURIComponent(choice)}?p=${page}`;

    // channel mode
    if (channels) {
        urlPath = `${urls.TOPIC_CHANNEL}/${encodeURIComponent(choice)}?p=${page}`;
        // check if choice is in array
        if (!config.topic.enabledChannels.includes(choice)) {
            return { error: errors.TOPIC.INVALID };
        }
    }
    // normal mode
    else {
        // check if choice is in array
        if (!config.topic.enabledSubTopics.includes(choice)) {
            return { error: errors.TOPIC.INVALID };
        }
    }

    let response;
    try {
        response = await axios.get(urlPath);
    } catch (err) {
        return { error: err.message };
    }

    const $ = cheerio.load(response.data, { decodeEntities: false });

    // const totalPageCount = parseInt($(".pager").attr("data-pagecount")) || 1;
    // const currentPage = parseInt($(".pager").attr("data-currentpage")) || 1;
    const totalTopicCount = parseInt($("#left-index > h2").attr("title").split(" ")[0]);
    const totalPageCount = Math.ceil(totalTopicCount / 50);

    const topics = [];

    $(".topic-list")
        .find("li > a")
        .each(async (index, element) => {
            const currentElement = $(element);

            const title = currentElement
                .contents()
                .filter(function () {
                    return this.nodeType === 3;
                })
                .text()
                .trim();

            const totalEntryCount =
                parseInt(currentElement.find("small").text()) || 1;
            const topicSlug = currentElement.attr("href");
            const topicUrl = `${urls.BASE}/${topicSlug}`;
            const id = parseID(topicSlug);

            topics.push({
                id,
                title,
                topicSlug,
                topicUrl,
                totalEntryCount,
            });
        });


    if (topics.length === 0) {
        return { error: errors.TOPIC.NOT_FOUND };
    }

    return (topicList = {
        totalTopicCount,
        totalPageCount,
        topics
    });
};
