const { Router } = require('express');
const router  = Router();
const serviciosController = require('../controllers/serviciosController');



router.get('/servicios', serviciosController.getAll);
router.get('/servicios/:id', serviciosController.getById);

module.exports = router;