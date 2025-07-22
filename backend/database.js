const sqlite3 = require("sqlite3").verbose();
let sql;

const URL_LENGTH = 5

const db = new sqlite3.Database("./urls.db", sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message);
})

function gen_short_url() {
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let shortURL = "";
    
    for (let i = 0; i < URL_LENGTH; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        shortURL += characters[randomIndex];
    }

    return shortURL;
}

async function input_url(url) {
    let short_url = gen_short_url()

    sql = `INSERT INTO urls(url, short_url) VALUES (?, ?)`;

    db.run(sql, [url, short_url], (err) => {
        if (err) return console.error(err.message);
    })

    return short_url
}

async function to_short_url(url) {
    sql = "SELECT * FROM urls WHERE url = ?"

    found_row = await new Promise((resolve, reject) => {
        db.get(sql, [url], (err, row) => {
            if (err) return console.error(err.message);
            if (row) {
                resolve(row)
            } else {
                resolve("No Record Found")
            }
        })
    })

    let short_url = ""

    if (found_row === "No Record Found") {
        short_url = await input_url(url)
    } else {
        short_url = found_row.short_url
    }
    
    return short_url
}

async function to_long_url(url) {
    sql = "SELECT * FROM urls WHERE short_url = ?"

    long_url = await new Promise((resolve, reject) => {
        db.get(sql, [url], (err, row) => {
            if (err) return console.error(err.message);
            if (row) {
                resolve(row)
            } else {
                resolve("No Record Found")
            }
        })
    })

    return long_url.url
}

async function get_all_urls() {
    sql = `SELECT * FROM urls`;

    data = []
    await new Promise((resolve, reject) => {
        db.all(sql, [], (err, rows) => {
            if (err) return console.error(err.message);
            rows.forEach(row => {
                data.push(row);
                resolve(row);
            })
        })
    })
    return data
}

module.exports = { get_all_urls, to_short_url, input_url, to_long_url }
