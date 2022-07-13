// require('dotenv').config();

const api = {
  name: 'eksisozluk-api',
  endpoint: '/api',
  port: 3000,
}

const asyncRequestHeaders = {"X-Requested-With": "XMLHttpRequest"}

module.exports = {
  api,
  asyncRequestHeaders
};
// export const apiEnpoint = '/api';
// export const serveDoc = true;
// export const serveClientEx = true;
// export const docEndpoint = '/doc';
// export const clientEndpoint = '/';
// export const useMongo = process.env.USE_MONGO || false;
// export const cacheAPI = process.env.CACHE_API || false;
// export const limitAPI = process.env.LIMIT_API || false;