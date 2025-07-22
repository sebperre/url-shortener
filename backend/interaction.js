async function getURL(url) {
    let data = await db.query(`SELECT ${url} FROM urls`);
    return data;
}

module.exports = getURL