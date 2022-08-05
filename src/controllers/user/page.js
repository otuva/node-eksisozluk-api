const axios = require('axios');
const cheerio = require('cheerio');
const URLS = require('../../constant/urls');
const ERRORS = require('../../constant/errors');
const config = require('../../config');
const parseEntryDateTime = require('../../utils/entry/parseEntryDateTime');

module.exports = async (nick, page=1) => {
    page = parseInt(page)
    let response;
    try {
        // https://eksisozluk.com/son-entryleri?nick=ssg&p=1
        response = await axios.get(`${URLS.ENTRY_PAGE}${nick}&p=${page}`, {
            "headers": config.asyncRequestHeaders
        });
    } catch (err) {
        return { error: err.message };
    }

    const $ = cheerio.load(response.data, { decodeEntities: false });
    const entries = [];

    $('.topic-item').each((index, element) => {
        const currentElement = $(element);
        const entryElement = currentElement.find('li');

        const id = parseInt(entryElement.attr("data-id"));
        const title = currentElement.find("#title").attr("data-title");
        const body = currentElement.find(".content").html().trim();
        const author = entryElement.attr("data-author");
        const favCount = parseInt(entryElement.attr("data-favorite-count"));
        const isPinned = entryElement.attr("data-ispinned") === "true";
        const isPinnedOnProfile = entryElement.attr("data-ispinnedonprofile") === "true";
        const inEksiSeyler = entryElement.attr("data-seyler-slug") ? true : false;
        const commentCount = parseInt(entryElement.attr("data-comment-count"));
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

    if (entries.length === 0) {
        return { error: ERRORS.PAGE.NOT_FOUND };
    }

    // there's pinned entry on the page
    if (page === 1 && entries.length === 11) {
        const pinnedEntry = entries.shift();
        return { pinnedEntry, entries };
    }

    return { entries };
};