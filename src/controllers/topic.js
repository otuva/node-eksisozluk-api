const axios = require('axios');
const cheerio = require('cheerio');
const urls = require('../constant/urls');
const errors = require('../constant/errors');
const parseEntryDateTime = require('../utils/entry/parseEntryDateTime');

module.exports = async (slug) => {
    let response;
    try {
        response = await axios.get(`${urls.BASE}${slug}`);
    } catch (err) {
        return { error: err.message };
    }

    const $ = cheerio.load(response.data, { decodeEntities: false });

    const title = $("#title").attr("data-title");

    const entries = [];

    $("#entry-item-list").find("li").each((index, element) => {
        const currentElement = $(element);
        const id = currentElement.attr("data-id");
        const body = currentElement.find(".content").html().trim();
        const author = currentElement.attr("data-author");
        const favCount = currentElement.attr("data-favorite-count");
        const isPinned = currentElement.attr("data-ispinned");
        const isPinnedOnProfile = currentElement.attr("data-ispinnedonprofile");
        const inEksiSeyler = currentElement.attr("data-seyler-slug") ? "true" : "false";
        const commentCount = currentElement.attr("data-comment-count");
        // fix to the problem stems from eksisozluk -> default picture doesn't have leading 'https:' string in the url
        const _authorProfilePictureSrc = currentElement.find(".avatar").attr("src")
        const authorProfilePicture = _authorProfilePictureSrc.startsWith("https://") ? _authorProfilePictureSrc : `https:${_authorProfilePictureSrc}`;
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
    return entries;
};