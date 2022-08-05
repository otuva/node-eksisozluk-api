const axios = require('axios');
const URLS = require('../../constant/urls');
const ERRORS = require('../../constant/errors');
const config = require('../../config');

module.exports = async (query) => {
    let response;
    try {
        response = await axios.get(URLS.AUTO_SEARCH + encodeURIComponent(query),
            { headers: config.asyncRequestHeaders });
    } catch (err) {
        return { error: err.message };
    }

    if (response.data.Titles.length === 0 && response.data.Nicks.length === 0) {
        return { error: ERRORS.SEARCH.NOT_FOUND};
    }
    return response.data;
};