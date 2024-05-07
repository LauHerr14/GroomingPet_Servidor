const db = require('../config/config');

const Servicio = {};

Servicio.findAll = (limit, offset, result) => {
    let sql = `SELECT * FROM servicios`;
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

Servicio.findById = (id, result) => {
    db.query(`SELECT * FROM servicios WHERE id_servicio = ${id}`, (err, res) => {
        if (err) {
            console.log('error: ', err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
}

module.exports = Servicio;