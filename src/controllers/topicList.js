const axios = require("axios");
const cheerio = require("cheerio");
const urls = require("../constant/urls");
const parseID = require("../utils/topic/parseID");
const errors = require('../constant/errors');
// const parseEntryDateTime = require('../utils/entry/parseEntryDateTime');

module.exports = async (choice, page = 1, channels = false) => {
    let urlPath = `${urls.TOPIC}/${choice}?p=${page}`;

    // channel mode
    if (channels) {
        urlPath = `${urls.TOPIC_CHANNEL}/${choice}?p=${page}`;
        switch (choice) {
            case "haber":
            case "sinema":
            case "bilim":
            case "eğitim":
            case "spoiler":
            case "müzik":
            case "edebiyat":
            case "ekonomi":
            case "tarih":
            case "yeme-içme":
            case "ilişkiler":
            case "siyaset":
            case "teknoloji":
            case "sanat":
            case "moda":
            case "otomotiv":
            case "magazin":
            case "ekşi-sözlük":
            case "spor":
            case "motosiklet":
            case "sağlık":
            case "oyun":
            case "anket":
            case "programlama":
            case "tv":
            case "seyahat":
            case "havacılık":
            case "troll":
                null;
                break;
            default:
                return { error: errors.TOPIC.INVALID };
        }
    }
    // normal mode
    else {
        switch (choice) {
            case "gundem":
            case "sorunsal":
            case "tarihte-bugun":
            case "basiboslar":
                null;
                break;
            default:
                return { error: errors.TOPIC.INVALID };
        }
    }

    console.log(urlPath)
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
    console.log(totalTopicCount);

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
