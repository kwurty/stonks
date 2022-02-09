const Parser = require('rss-parser');
const DB = require('./db');
let parse = new Parser();

module.exports = async function (url, database) {
    setInterval(async function () {
        let feed = await parse.parseURL(url);
        console.log(feed.title);

        feed.items.forEach(item => {
            console.log(item.title + ':' + item.link)
        });
    }, 300000)
}
