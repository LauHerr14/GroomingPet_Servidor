const { Router } = require('express');
const router  = Router();
const mascotasController = require('../controllers/servicioController');



router.get('/servicios', serviciosController.getAll);
router.get('/servicios/:id', serviciosController.getById);

module.exports = router;