const {Router} = require('express');
const devcontroller = require('./Controllers/devcontroller');
const Searchcontroller = require('./Controllers/Searchcontroller');
const routes = Router();
//Tipos de Parãmetros: 
//Route params: request.params(identificar um recurso na alteração ou remoção)
//query params: request.query(Filtros, ordenação, paginação)
//body: request.body(dados para criação ou alteracao de um registro)

//mongoDB (usado para bancos nao muitos relacionais)
routes.get('/devs', devcontroller.index);
routes.post('/devs', devcontroller.store);
routes.get('/search', Searchcontroller.index);

module.exports = routes;
