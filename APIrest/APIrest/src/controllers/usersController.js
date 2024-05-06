const User = require('../models/cliente');
module.exports = {
    register(req, res) {
        const user = req.body; //Datos del cliente
        User.create(user, (err, data) => {
            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Error al crear el usuario',
                    error: err
                });
            }
            return res.status(201).json({
                success: true,
                message: 'Creado el usuario',
                data: data //id del usuario creado
            });
        }); 
    },

//Esto nos brinda la opcion de consultar los datos
    getAll(req, res) {
        const limit = req.query.limit || null;
        const offset = req.query.offset || null;

        User.findAll(limit, offset, (err, data) => {
            if (err) {
                return res.status(501).json(
                    {
                        success: false,
                        message: 'Error al obtener los usuarios',
                        error: err
                    }
                );
            }
            return res.status(202).json(
                {
                    success: true,
                    message: 'Usuarios obtenidos',
                    data: data
                }
            );
        });
    },

    getById (req, res) {
        const id = req.params.id;
        User.findById(id, (err, data) => {
            if (err) {
                return res.status(501).json(
                    {
                        success: false,
                        message: 'Error al obtener el usuario',
                        error: err
                    }
                );
            }
            return res.status(202).json(
                {
                    success: true,
                    message: 'Usuario obtenido',
                    data: data
                }
            );
        });
    }
};
