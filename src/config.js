const api = {
  name: 'eksisozluk-api',
  endpoint: '/api',
  port: 3000,
  limiting: {
    enabled: false,
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 100 // limit each IP to 100 requests per windowMs
  }
}

const doc = {
  endpoint: '/doc',
  enabled: true,
}

const user = {
  autoRetrieveLastEntries: true, // causes two requests instead of one (mimics the behavior of the website)
}

const topic = {
  allowRedirect: true
}

const asyncRequestHeaders = { "X-Requested-With": "XMLHttpRequest" }

module.exports = {
  api,
  doc,
  user,
  topic,
  asyncRequestHeaders
};