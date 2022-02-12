const Parser = require('rss-parser');
const Handlepost = require('./posthandler');
let parser = new Parser();

module.exports = async function (url) {
    let feed = await parser.parseURL(url);

    feed.items.forEach(post => {
        Handlepost(post);
    })
}
