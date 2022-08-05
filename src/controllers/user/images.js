const axios = require('axios');
const cheerio = require('cheerio');
const config = require('../../config');
const URLS = require('../../constant/urls');
const ERRORS = require('../../constant/errors');
const PAGES = require('../../constant/pages');

module.exports = async (nick) => {
    let response;
    try {
        response = await axios.get(`${URLS.BASE}/${PAGES.NON_ENTRY_PAGES.images}?nick=${nick}`, {
            "headers": config.asyncRequestHeaders
        });
    } catch (err) {
        return { error: err.message };
    }

    const $ = cheerio.load(response.data, { decodeEntities: false });

    const images = [];

    console.log(response.data);

    $('li').each((index, element) => {
        const currentElement = $(element);
        const slug = currentElement.find('a').attr('href');
        const imageURL = currentElement.find('div').css('background-image').replace('url(','').replace(')','').replace(/\"/gi, "");
        const url = imageURL.match(/\/(\d{4})\/(\d{1,2})\/(\d{1,2})\//);
        
        const year = url[1], month = url[2], day = url[3];

        images.push({
            slug,
            imageURL,
            date: {
                year,
                month,
                day
            },
        });
    });

    return {images};

}