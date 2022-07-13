module.exports = (slug) => {
    // input is like: /metal-pena--1530405
    return parseInt(slug.split("--")[1]);
};