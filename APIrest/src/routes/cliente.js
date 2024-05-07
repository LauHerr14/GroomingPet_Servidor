const { Router } = require('express');
const router  = Router();

router.get('/clientes', (req, res) => {
    res.json({"message": "Nombre"});
});


router.post('/', (req, res) => {
    const { nombre, direccion, telefono, contraseña } = req.body;
    res.json({ "message": "Usuario creado" });
});


router.delete('/:id', (req, res) => {
    const { id } = req.params;
});


router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, direccion, telefono, contraseña } = req.body;
    res.json({ "message": "Usuario actualizado"});
});

module.exports = router;