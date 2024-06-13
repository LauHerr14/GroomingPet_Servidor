const { Router } = require('express');
const router  = Router();
const mascotasController = require('../controllers/mascotasController');


router.post('/mascotas', mascotasController.register);
router.get('/lista/:id', mascotasController.listaMascotas);  //lista de mascotas por cliente
router.get('/mascotas', mascotasController.getAll);
router.get('/mascotas/:id', mascotasController.getById);


module.exports = router;