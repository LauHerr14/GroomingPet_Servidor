const { Router } = require('express');
const router  = Router();
const agendaController = require('../controllers/agendaController');



router.get('/agenda_citas', agendaController.getAll);  //consulta las horas ya agendadas a partir de ahora
router.get('/agenda_citas/:id', agendaController.getById); //consultar citas agendadas por el ususario 

module.exports = router;