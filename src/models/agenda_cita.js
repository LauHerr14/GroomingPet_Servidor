const db = require('../config/config');

const agenda_citas ={};

agenda_citas.findAll = ( result) => {
    let sql = `SELECT * FROM agenda_citas `;
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

agenda_citas.findById = (id, result) => {
    db.query(`SELECT hora_agendada FROM agenda_citas WHERE id_cliente = ${id}`, (err, res) => {
        if (err) {
            console.log('error: ', err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
}

module.exports = agenda_citas;


