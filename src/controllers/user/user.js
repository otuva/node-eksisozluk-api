const axios = require('axios');
const cheerio = require('cheerio');
const URLS = require('../../constant/urls');
const page = require('./page');
const config = require('../../config');

module.exports = async (nick) => {
    let response;
    try {
        response = await axios.get(`${URLS.USER}/${nick}`);
    } catch (err) {
        return { error: err.message };
    }

    const $ = cheerio.load(response.data, { decodeEntities: false });

    let isUserCaylak = false, isUserLanetli = false, isUserLeyla = false;
    $("#user-text-badges > li > a").each((index, element) => {
        const currentElement = $(element);

        if (currentElement.text() === "çaylak") {
            isUserCaylak = true;
        }
        else if (currentElement.text() === "lanetli") {
            isUserLanetli = true;
        }
        else if (currentElement.text() === "leyla") {
            isUserLeyla = true;
        }
    })
    const totalEntryCount = parseInt($("#entry-count-total").text().trim());
    const totalPageCount = isUserCaylak ? -1 : Math.ceil(totalEntryCount / 10);
    const userFollowingCount = parseInt($("#user-following-count").text().trim());
    const userFollowerCount = parseInt($("#user-follower-count").text().trim());
    const karmaLevel = $(".muted").text();
    const pinnedBadges = []
    // fix to the problem stems from eksisozluk -> default picture doesn't have leading 'https:' string in the url
    let authorProfilePicture = $(".avatar").attr("src")
    authorProfilePicture = authorProfilePicture.startsWith("https://") ? authorProfilePicture : `https:${authorProfilePicture}`;

    // iterate over pinned badges and push them to the array
    $('.user-profile-badge-item').each((index, element) => {
        const badge = $(element);
        const title = badge.attr('title');
        const imgSrc = badge.find('img').attr('src');

        pinnedBadges.push({
            title,
            imgSrc
        });
    });

    let lastEntries;
    if (config.user.autoRetrieveLastEntries) lastEntries = await page(nick, 'entries', 1);

    return {
        nick,
        isUserCaylak,
        isUserLanetli,
        isUserLeyla,
        totalEntryCount,
        totalPageCount,
        userFollowingCount,
        userFollowerCount,
        karmaLevel,
        pinnedBadges,
        authorProfilePicture,
        lastEntries
    };
};