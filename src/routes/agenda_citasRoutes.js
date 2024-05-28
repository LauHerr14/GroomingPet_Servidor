const { Router } = require('express');
const router  = Router();
const agenda_citasController = require('../controllers/agenda_citasController');


router.get('/agenda_citas', agenda_citasController.getAll);  //consulta las horas ya agendadas a partir de ahora
router.get('/agenda_citas/:id', agenda_citasController.getById); //consultar citas agendadas por el ususario 

module.exports = router;