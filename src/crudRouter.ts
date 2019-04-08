import express, { RequestHandler } from 'express';

const auth: RequestHandler = function(_req, _res, next) {
  console.log(`auth`);
  next();
};

const queryParamLogger: RequestHandler = function(req, _res, next) {
  console.log(req.query);
  next();
};

function createResource(prefix: string) {
  const crudRouter = express.Router();

  crudRouter.use(queryParamLogger);

  crudRouter.get('/:id', function(req, res) {
    res.send(`${prefix} GET ${req.params.id}`);
  });

  crudRouter.post('/', auth, function(req, res) {
    res.send(`${prefix} POST`);
  });

  return crudRouter;
}

export default createResource;
