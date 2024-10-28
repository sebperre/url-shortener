

async function getURL(url) {
    let data = await db.query(`SELECT ${url} FROM urls`);
    return data;
}

// async function saveNewScore(name, score) {
//     let old_score_q = await db.query(`SELECT score FROM leaderboard WHERE name='${name}'`);
//     if (old_score_q.length==0) {
//         console.log('first score');
//         db.execute(`INSERT INTO leaderboard (name,score) VALUES ('${name}',${score});`);
//     } else {
//         let old_score=old_score_q[0]['SCORE'];
//         if (score > old_score) {
//             console.log(`score is higher ${score} > ${old_score}`);
//             db.execute(`UPDATE leaderboard SET score = '${score}' WHERE name = '${name}';`);
//         } else {
//             console.log(`score is lower ${score} < ${old_score}`);
//         }
//     }
// }

// module.exports = {getLeaderboard, saveNewScore};

module.exports = getURL