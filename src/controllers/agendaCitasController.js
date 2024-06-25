const agenda_citas = require('../models/agendaCita');
module.exports = {

    horaAgendada(req, res) {
        const agenda_citas1 = req.body; 
        // console.log('1:', agenda_citas0)
        agenda_citas.create(agenda_citas1, (err, data) => {
            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Error, la cita no ha sido agendada',
                    error: err
                });
            }
            return res.status(201).json({
                success: true,
                message: 'Cita agendada',
                data: data 
            });
        }); 
    },

    getByDate(req, res) {
        const fecha = req.params.fecha;
        agenda_citas.getByDate(fecha, (err, data) => {
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