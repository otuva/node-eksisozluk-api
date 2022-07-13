const axios = require('axios');
const urls = require('../constant/urls');
const config = require('../config');

module.exports = async (query) => {
    let response;
    try {
        response = await axios.get(urls.AUTO_SEARCH + encodeURIComponent(query),
            { headers: config.asyncRequestHeaders });
    } catch (err) {
        return { error: err.message };
    }
    return response.data;
};