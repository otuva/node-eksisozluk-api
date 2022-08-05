// export controllers as modules for inline api

module.exports = {
    entry: require('./entry/entry'),
    user: require('./user/user'),
    page: require('./user/page'),
    allChannels: require('./index/allChannels'),
    debe: require('./index/debe'),
    images: require('./user/images'),
    topicList: require('./topic/topicList'),
    topic: require('./topic/topic'),
    autoComplete: require('./index/autoComplete'),
    search: require('./index/search'),
    startServer: require('../server').startServer
}