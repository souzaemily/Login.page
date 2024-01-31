// Importação
const {Router} = require('express');
const UserController = require('./controller/UserController');
const router = Router();

router.post('/login', UserController.loginUser);

module.exports = router;