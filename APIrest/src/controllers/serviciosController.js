const servicio = require('../models/servicio');
module.exports = {

    getAll(req, res) {
        const limit = req.query.limit || null;
        const offset = req.query.offset || null;

        servicio.findAll(limit, offset, (err, data) => {
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

    getById(req, res) {
        const id = req.params.id;
        servicio.findById(id, (err, data) => {
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