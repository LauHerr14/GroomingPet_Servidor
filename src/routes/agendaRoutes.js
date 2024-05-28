const { Router } = require('express');
const router  = Router();
const agendar_citasController = require('../controllers/agendaController');
const agendar_citasController = require('../controllers/agendaController');


router.get('/agendar_citas', agendar_citasController.getAll);  //consulta las horas ya agendadas a partir de ahora
router.get('/agendar_citas/:id', agendar_citasController.getById); //consultar citas agendadas por el ususario 

module.exports = router;