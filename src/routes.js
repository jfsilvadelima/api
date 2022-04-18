const express = require("express");
const routes = express.Router();

//GET: Busca info
//POST: Criar info
//PUT: Editar info completamente
//PATCH: Editar parte da info
//DELETE: Apagar info

routes.get("/", (request, response) => response.send("Hello world"));

module.exports = routes;
