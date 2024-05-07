const db = require('../config/config');

const servicio = {};

servicio.findAll = (limit, offset, result) => {
    let sql = `SELECT * FROM servicios`;
    if (limit != null && offset != null) {
        sql = sql.concat(` LIMIT ${limit} OFFSET ${offset}`);
    }
    console.log('sql: ', sql); //Agregar solo para depurar

    db.query(sql, (err, res) => {
        if (err) {
            console.log('error: ', err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
}

servicio.findById = (id, result) => {
    db.query(`SELECT * FROM servicios WHERE id_servicio = ${id}`, (err, res) => {
        if (err) {
            console.log('error: ', err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
}

module.exports = servicio;