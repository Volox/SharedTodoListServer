import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017';

export const getDb = async (name: string) => {
  const client = new MongoClient(url, { useNewUrlParser: true });

  const asdasd = await client.connect();

  return asdasd.db(name);
};
