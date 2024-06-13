const { Router } = require('express');
const router  = Router();
const agendaCitasController = require('../controllers/agendaCitasController');


router.post('/agenda_citas', agendaCitasController.horaAgendada);
router.get('/agenda_citas/todo', agendaCitasController.getAll);  //consulta las horas ya agendadas a partir de ahora
router.get('/agenda_citas/:id', agendaCitasController.getById); //consultar citas agendadas por el ususario 
router.get('/agenda_citas/dia/:fecha', agendaCitasController.getByDate);

module.exports = router;