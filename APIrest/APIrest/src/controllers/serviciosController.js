const User = require('../models/servicio');
module.exports = {
    register(req, res) {
        const user = req.body; //Datos del cliente
        
    },


    getAll(req, res) {
        const limit = req.query.limit || null;
        const offset = req.query.offset || null;

        User.findAll(limit, offset, (err, data) => {
            if (err) {
                return res.status(501).json(
                    {
                        success: false,
                        message: 'Error al obtener servicos',
                        error: err
                    }
                );
            }
            return res.status(202).json(
                {
                    success: true,
                    message: 'Servicios obtenidos',
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
                        message: 'Error al obtener servicios',
                        error: err
                    }
                );
            }
            return res.status(202).json(
                {
                    success: true,
                    message: 'Servicios obtenidos',
                    data: data
                }
            );
        });
    }
};