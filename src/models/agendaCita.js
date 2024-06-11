const db = require('../config/config');

const agenda_citas ={};

agenda_citas.create = (agenda_citas, result) => {
    const sql = `INSERT INTO agenda_citas(
        id_cliente,    
        id_mascota,
        fecha,
        hora
        )
        VALUES (?, ?, ?, ?)`;

    db.query(
        sql,
        [
            agenda_citas.id_cliente,
            agenda_citas.id_mascota,
            agenda_citas.fecha,
            agenda_citas.hora
        ],
        (err, res) => {
            if (err) {
                console.log('error: ', err);
                result(err, null);
            }
            else {
                //console.log('Id de la nueva mascota: ', res.insertId);
                result(null, res.insertId);
            }
        }
    )
};

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
    db.query(`SELECT fecha, hora FROM agenda_citas WHERE id_cliente = ${id}` , (err, res) => {
        if (err) {
            console.log('error: ', err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
}

module.exports = agenda_citas;


