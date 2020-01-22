const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
mongoose.connect('mongodb+srv://mateus:mbussonm@cluster0-fej8a.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.set('useCreateIndex', true);

app.use(express.json( ));

app.use(routes);

app.listen(3333);

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:
// Query Params:  request.query ( Filtros, ordenação, paginação ...)
// Route Params:  request.params ( Identificar um recurso na alteração ou remoção)
// Body:  request.bodyr ( Dados para criação ou alteração de um registro)
// Mongo DB( não relacional)