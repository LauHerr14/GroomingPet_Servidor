const { Router } = require('express');
const router = Router(); //routes
const userController = require('../controllers/usersController');
const usersController = require('../controllers/usersController');

const serviciosController = require('../controllers/serviciosController');

router.post('/clientes', usersController.register);
router.get('/clientes', usersController.getAll);
router.get('/clientes/:id', usersController.getById);


router.get('/servicios', serviciosController.getAll);
router.get('/servicios/:id', serviciosController.getById);

module.exports = router;