const db = require('../config/config');

const agenda ={};

agenda.findAll = ( result) => {
    let sql = `SELECT * FROM agendar_citas `;
    if (limit != null && offset != null) {
        sql = sql.concat(` LIMIT ${limit} OFFSET ${offset}`);
    }
    console.log('sql: ', sql);

    db.query(sql, (err, res) => {
        if (err) {
            console.log('error: ', err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
}

agenda.findById = (id, result) => {
    db.query(`SELECT * FROM agenda_citas WHERE hora_agendada = ${id}`, (err, res) => {
        if (err) {
            console.log('error: ', err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
}

module.exports = agendar_citas;


