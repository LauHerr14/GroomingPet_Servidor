const Mascota = require('../models/mascota');

module.exports = {
    register(req, res) {
        const mascota = req.body; //Datos del cliente
        Mascota.create(mascota, (err, data) => {
            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Error al crear la nueva mascota',
                    error: err
                });
            }
            return res.status(201).json({
                success: true,
                message: 'Creada la mscota',
                data: data //id del usuario creado
            });
        }); 
    },


    getAll(req, res) {
        const limit = req.query.limit || null;
        const offset = req.query.offset || null;

        Mascota.findAll(limit, offset, (err, data) => {
            if (err) {
                return res.status(501).json(
                    {
                        success: false,
                        message: 'Error al obtener las mascotas',
                        error: err
                    }
                );
            }
            return res.status(202).json(
                {
                    success: true,
                    message: 'Macotas obtenidas',
                    data: data
                }
            );
        });
    },

    getById (req, res) {
        const id = req.params.id;
        Mascota.findById(id, (err, data) => {
            if (err) {
                return res.status(501).json(
                    {
                        success: false,
                        message: 'Error al obtener las mascotas',
                        error: err
                    }
                );
            }
            return res.status(202).json(
                {
                    success: true,
                    message: 'Macotas obtenidas',
                    data: data
                }
            );
        });
    }
};
