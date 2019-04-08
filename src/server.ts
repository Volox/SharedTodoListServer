import express from 'express';
import createResource from './crudRouter';
const app = express();

app.use(function(req, _res, next) {
  console.log(`Requesting: ${req.path}`);
  next();
});

app.use('/todo', createResource('todo'));

app.get('/', function(req, res) {
  res.send('Hello World');
});

app.get('/jsonFile', function(req, res) {
  const todosJson = require('../assets/todo.json');
  res.json(todosJson);
});

console.log('Server starting');
app.listen(3000, () => {
  console.log('Server started');
});
