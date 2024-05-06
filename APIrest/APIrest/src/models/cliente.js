const db = require('../config/config');

const User = {};
User.create = (user, result) => {
    const sql = `INSERT INTO clientes(
            nombre_cliente,
            direccion,
            telefono,
            email,
            password
        )
        VALUES (?, ?, ?, ?, ?)`
    ;

    db.query(
        sql,
        [
            user.nombre_cliente,
            user.direccion,
            user.telefono,
            user.email,
            user.password
        ],
        (err, res) => {
            if (err) {
                console.log('error: ', err);
                result(err, null);
            }
            else {
                console.log('Id del nuevo usuario: ', res.insertId);
                result(null, res.insertId);
            }
        }
    )
};

User.findAll = (limit, offset, result) => {
    let sql = `SELECT * FROM clientes`;
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

User.findById = (id, result) => {
    db.query(`SELECT * FROM clientes WHERE id_cliente = ${id}`, (err, res) => {
        if (err) {
            console.log('error: ', err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
}

module.exports = User;