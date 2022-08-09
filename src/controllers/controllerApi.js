// export controllers as modules for inline api

module.exports = {
    entry: {
        getEntry: require('./entry/entry')
    },
    user: {
        getUser: require('./user/user'),
        getImages: require('./user/images'),
        getPage: require('./user/page'),
    },
    index: {
        getAllChannels: require('./index/allChannels'),
        getDebe: require('./index/debe'),
        getSearch: require('./index/search'),
        getAutoComplete: require('./index/autoComplete'),

    },
    topic: {
        getTopic: require('./topic/topic'),
        getTopicList: require('./topic/topicList'),
    },
    startServer: require('../server').startServer
}