const { Router } = require('express');
const router = Router(); //routes
const usersController = require('../controllers/usersController');


router.post('/clientes', usersController.register);
router.get('/clientes', usersController.getAll);
router.get('/clientes/:id', usersController.getById);


module.exports = router;