const db = require('./db');
const Axios = require('axios');


module.exports = async (post) => {
    let stock = post.title.match(/[$][A-Za-z]*/);
    if (!stock) return

    let userId = ""
    let stockID = ""

    db.promise().query('SELECT `userid` FROM `users` WHERE USERNAME = "' + post.author + '"')
        .then(([rows, fields]) => {
            console.log(rows);
            if (rows.userid) return userId = rows.userid

            console.log('inserting');
            db.promise().query('INSERT INTO `users` (username) VALUES ("' + post.author + '")')
                .then(([rows, fields]) => {
                    userId = rows[0]
                })
        })

    db.promise().query('SELECT `stockid` FROM `stocks` WHERE stocksymbol = "' + stock + '"')
        .then(([rows, fields]) => {
            if (rows.length > 0) return stockId = rows[0]

            Axios.get(`https://finnhub.io/api/v1/webhook/search?token=${process.env.STOCK_TOKEN}?q=${stock}`)
                .then((res) => {
                    console.log(res);
                    if (!res) return
                })

            db.promise().query('INSERT INTO `users` ("username") VALUES ("' + post.author + '")')
                .then(([rows, fields]) => {
                    userId = rows[0]
                })
        })

}