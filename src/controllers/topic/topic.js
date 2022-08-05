const axios = require('axios');
const cheerio = require('cheerio');
const URLS = require('../../constant/urls');
// const errors = require('../../constant/errors');
const config = require('../../config');
const INFO = require('../../constant/info');
const parseEntryDateTime = require('../../utils/entry/parseEntryDateTime');

module.exports = async (slug, page = 1) => {
    let response;
    try {
        response = await axios.get(`${URLS.BASE}/${encodeURIComponent(slug)}?p=${page}`);
    } catch (err) {
        return { error: err.message };
    }

    if (response.request.path !== `/${slug}?p=${page}`) {
        if (config.topic.allowRedirect) {
            console.info(INFO.TOPIC.REDIRECTING);
            console.info(`/api/topic/${slug}/${page} --> /api/topic${response.request.path}/${page}`);
            return { redirect: `/api/topic${response.request.path}/${page}` };
        }
        else {
            console.info(INFO.TOPIC.REDIRECTING_DISABLED);
            console.info(`/api/topic/${slug}/${page} --> /api/topic${response.request.path}/${page}`);
        }
    }

    const $ = cheerio.load(response.data, { decodeEntities: false });

    const title = $("#title").attr("data-title");
    const topicID = parseInt($("#title").attr("data-id"));
    const topicSlug = `${$("#title").attr("data-slug")}--${topicID}`;
    const numberOfPages = parseInt($(".pager").attr("data-pagecount")) || 1;
    const currentPage = parseInt($(".pager").attr("data-currentpage")) || 1;
    const _hiddenChannels = $("#hidden-channels").text().trim().split(",") || null;
    const tags = _hiddenChannels ? _hiddenChannels : null;

    const disambiguations = [];
    $("#disambiguations").find("ul > li").each((index, element) => {
        disambiguations.push({
            slug: $(element).find("a").attr("href"),
            title: $(element).text()
        });
    });

    const entries = [];

    $("#entry-item-list").find("li").each((index, element) => {
        const currentElement = $(element);
        const id = parseInt(currentElement.attr("data-id"));
        const body = currentElement.find(".content").html().trim();
        const author = currentElement.attr("data-author");
        const favCount = parseInt(currentElement.attr("data-favorite-count"));
        const isPinned = currentElement.attr("data-ispinned") === "true";
        const isPinnedOnProfile = currentElement.attr("data-ispinnedonprofile") === "true";
        const inEksiSeyler = currentElement.attr("data-seyler-slug") ? true : false;
        const commentCount = parseInt(currentElement.attr("data-comment-count"));
        // fix to the problem stems from eksisozluk -> default picture doesn't have leading 'https:' string in the url
        let authorProfilePicture = currentElement.find(".avatar").attr("src")
        authorProfilePicture = authorProfilePicture.startsWith("https://") ? authorProfilePicture : `https:${authorProfilePicture}`;
        const date = currentElement.find("footer > div.info > div.entry-footer-bottom > div.footer-info > div:eq(1) > a").text();
        const [createdAtDate, createdAtTime, updatedAtDate, updatedAtTime] = parseEntryDateTime(date);

        entries.push({
            id,
            title,
            body,
            favCount,
            isPinned,
            isPinnedOnProfile,
            inEksiSeyler,
            commentCount,
            aboutAuthor: {
                author,
                authorProfilePicture
            },
            aboutDateTime: {
                createdAtDate,
                createdAtTime,
                updatedAtDate,
                updatedAtTime
            }
        });
    });
    return {
        topicID,
        disambiguations,
        title,
        topicSlug,
        numberOfPages,
        currentPage,
        tags,
        entries
    };
};