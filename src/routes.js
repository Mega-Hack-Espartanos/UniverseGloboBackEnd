const express = require('express');
const UsuarioController = require('./controller/usuarioController');
const InteresseController = require('./controller/interesseController');
const Vincular = require('./controller/vincular');

const routes = express.Router();

routes.get('/usuarios', UsuarioController.index);
routes.get('/usuario', UsuarioController.show);
routes.post('/usuario', UsuarioController.store);

routes.get('/interesse', InteresseController.index);
routes.post('/interesse', InteresseController.store);

routes.post('/usuario/:usuarioId/:interesseId', Vincular.store);

module.exports = routes;
