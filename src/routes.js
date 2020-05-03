const express = require('express');
const UsuarioController = require('./controller/usuarioController');
const InteresseController = require('./controller/interesseController');
const Vincular = require('./controller/vincular');
const NewsController = require('./controller/newsController');

const routes = express.Router();

routes.get('/usuarios', UsuarioController.index);
routes.get('/usuario', UsuarioController.show);
routes.post('/usuario', UsuarioController.store);

routes.get('/interesse', InteresseController.index);
routes.post('/interesse', InteresseController.store);

routes.post('/usuario/:usuarioId/:interesseId', Vincular.store);

routes.get('/news', NewsController.index);
routes.post('/news', NewsController.store);
routes.post('/newsdetails/:id', NewsController.details);

module.exports = routes;
