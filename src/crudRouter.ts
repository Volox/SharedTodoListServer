import express, { RequestHandler } from 'express';
import { ObjectId, ObjectID } from 'bson';

import { getDb, getCollection } from './db/mongo';

type Post = {
  name: string;
  author: string;
};

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

  crudRouter.get('/:id', async (req, res) => {
    // res.send(`${prefix} GET ${req.params.id}`);

    const db = await getDb(prefix);
    const posts = db.collection<Post>('posts');

    const post = await posts.findOne({
      _id: new ObjectId(req.params.id)
    });

    if (post) {
      post.name;
    }

    res.json(post);
  });

  crudRouter.post('/', async function(req, res) {
    const db = await getDb(prefix);
    const posts = db.collection<Post>('posts');
    // const posts = db.collection('posts');

    const response = await posts.insertOne({
      name: 'sadasd',
      author: 'Emilio'
    });

    res.json(response.insertedId);
  });

  return crudRouter;
}

export default createResource;
