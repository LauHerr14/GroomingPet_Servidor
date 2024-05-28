const agenda_citas = require('../models/agenda_cita');
module.exports = {

    getAll(req, res) {   
        agenda_citas.findAll( (err, data) => {
            if (err) {
                return res.status(501).json(
                    {
                        success: false,
                        message: 'Error, la hora seleccionada no esta disponible',
                        error: err
                    }
                );
            }
            return res.status(202).json(
                {
                    success: true,
                    message: 'Citas consultadas',
                    data: data
                }
            );
        });
    },

    getById (req, res) {
        const id = req.params.id;
        agenda_citas.findById(id, (err, data) => {
            if (err) {
                return res.status(501).json(
                    {
                        success: false,
                        message: 'Error, la hora seleccionada no esta disponible',
                        error: err
                    }
                );
            }
            return res.status(202).json(
                {
                    success: true,
                    message: 'Su cita ah sido asignada con exito',
                    data: data
                }
            );
        });
    }
};