const db = require('../config/config');

const Mascota = {};
Mascota.create = (mascota, result) => {
    const sql = `INSERT INTO mascotas(
        id_cliente,    
        nombre_mascota,
        tipo_mascota
        )
        VALUES (?, ?, ?)`;

    db.query(
        sql,
        [
            mascota.id_cliente,
            mascota.nombre_mascota,
            mascota.tipo_mascota
        ],
        (err, res) => {
            if (err) {
                console.log('error: ', err);
                result(err, null);
            }
            else {
                console.log('Id de la nueva mascota: ', res.insertId);
                result(null, res.insertId);
            }
        }
    )
};

Mascota.findAll = (limit, offset, result) => {
    let sql = `SELECT * FROM mascotas`;
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

Mascota.findById = (id, result) => {
    db.query(`SELECT * FROM mascotas WHERE id_mascota = ${id}`, (err, res) => {
        if (err) {
            console.log('error: ', err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
}

module.exports = Mascota;