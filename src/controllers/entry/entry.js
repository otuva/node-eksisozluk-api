// calling the service, taking the request and sending the response

const axios = require('axios');
const cheerio = require('cheerio');
const URLS = require('../../constant/urls');
const ERRORS = require('../../constant/errors');
const parseEntryDateTime = require('../../utils/entry/parseEntryDateTime');


module.exports = async (id) => {
    // request the entry page
    // format of the url: https://eksisozluk.com/entry/<id>
    // return the entry object
    let response;
    try {
        response = await axios.get(`${URLS.ENTRY}/${id}`);
    } catch (err) {
        return { error: err.message };
    }

    const $ = cheerio.load(response.data, { decodeEntities: false });
    const element = $(`li[data-id=${id}]`);

    if (element.length === 0) {
        return { error: ERRORS.ENTRY.NOT_FOUND };
    }

    id = parseInt(id);
    const title = $("#title").attr("data-title");
    const body = element.find(".content").html().trim();
    const author = element.attr("data-author");
    const favCount = parseInt(element.attr("data-favorite-count"));
    const isPinned = element.attr("data-ispinned") === "true";
    const isPinnedOnProfile = element.attr("data-ispinnedonprofile") === "true";
    const inEksiSeyler = element.attr("data-seyler-slug") ? true : false;
    const commentCount = parseInt(element.attr("data-comment-count"));
    // fix to the problem stems from eksisozluk -> default picture doesn't have leading 'https:' string in the url
    let authorProfilePicture = element.find(".avatar").attr("src")
    authorProfilePicture = authorProfilePicture.startsWith("https://") ? authorProfilePicture : `https:${authorProfilePicture}`;
    const date = element.find("footer > div.info > div.entry-footer-bottom > div.footer-info > div:eq(1) > a").text();
    const [createdAtDate, createdAtTime, updatedAtDate, updatedAtTime] = parseEntryDateTime(date);

    return {
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
    };
}