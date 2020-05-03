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

routes.get('/news/:id', NewsController.GetNews);
routes.get('/news', NewsController.GetNews);
routes.post('/news', NewsController.PostNews);
routes.put('/news/:id', NewsController.PutNews);
routes.delete('/news/:id', NewsController.DeleteNews);

module.exports = routes;
