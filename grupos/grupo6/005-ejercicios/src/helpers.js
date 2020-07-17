import mongo from 'mongodb';
const MongoClient = mongo.MongoClient;

var url = 'mongodb://localhost:27017/universidades';
const dbName = 'universidades';

export function GET(router, tabla) {
  router.get('/', function (req, res) {
    const client = new MongoClient(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    client.connect(async (err) => {
      const collection = client.db(dbName).collection(tabla);
      try {
        const result = await collection.find({}).toArray();
        client.close();
        res.send(result);
      } catch (e) {
        client.close();
        res.status(500).send();
      }
    });
  });
}