const db = require('../config/config');

const cliente = {};
cliente.create = (cliente, result) => {
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
            cliente.nombre_cliente,
            cliente.direccion,
            cliente.telefono,
            cliente.email,
            cliente.password
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

cliente.findAll = (limit, offset, result) => {
    let sql = `SELECT * FROM clientes`;
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

cliente.findById = (id, result) => {
    db.query(`SELECT * FROM clientes WHERE id_cliente = ${id}`, (err, res) => {
        if (err) {
            console.log('error: ', err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
}

module.exports = cliente;