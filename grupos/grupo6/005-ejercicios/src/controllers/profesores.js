import express from 'express';
const router = express.Router();

import mongo from 'mongodb';
import { ObjectId } from 'mongodb';

const MongoClient = mongo.MongoClient;

const url = 'mongodb://localhost:27017/universidades';
const dbName = 'universidades';

router.get('/', function (req, res) {
  const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  client.connect(async (err) => {
    const collection = client.db(dbName).collection('alumnos');
    try {
      const result = await collection.find({}).toArray();
      res.send(result);
    } catch (e) {
      res.status(500).send();
    } finally {
      client.close();
    }
  });
});

router.get('/:id', function (req, res) {
  const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  client.connect(async (err) => {
    const collection = client.db(dbName).collection('alumnos');
    try {
      const alumno = await collection.findOne({
        _id: new ObjectId(req.params.id),
      });

      if (!alumno) throw new Error();

      res.send(alumno);
    } catch (e) {
      res.status(500).send();
    } finally {
      client.close();
    }
  });
});

router.post('/', function (req, res) {
  const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  client.connect(async (err) => {
    const collection = client.db(dbName).collection('alumnos');
    try {
      await collection.insertOne({
        nombre: req.body.nombre,
        edad: req.body.edad,
        provincia: req.body.provincia,
      });
    } catch (e) {
      res.status(500).send();
    }
    res.status(200).send({ ok: true });
    client.close();
  });
});

router.put('/:id', (req, res) => {
  // Mejorar esta ruta, resulta que si se elije no updatear algun valor le queda nulo en vez de conservar el anterior.
  // Para que esto funcione deben updatearse todos los atributos del "modelo".

  const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  client.connect(async (err) => {
    const collection = client.db(dbName).collection('alumnos');

    const updates = Object.keys(req.body);
    const allowedUpdates = ['nombre', 'edad', 'provincia'];


    const isValidOperation = updates.every((update) =>
      allowedUpdates.includes(update)
    );
    if (!isValidOperation)
      return res.status(400).send({ error: 'Invalid key name' });

    try {
      const alumno = await collection.findOneAndUpdate(
        { _id: new ObjectId(req.params.id) },
        {
          $set: {
            nombre: req.body.nombre,
            edad: req.body.edad,
            provincia: req.body.provincia,
          },
        }
      );

      if (!alumno) throw new Error();

      res.send(alumno);
    } catch (e) {
      res.status(500).send();
    } finally {
      client.close();
    }
  });
});

router.delete('/:id', (req, res) => {
  const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  client.connect(async (err) => {
    const collection = client.db(dbName).collection('alumnos');
    try {
      await collection.deleteOne({ _id: new ObjectId(req.params.id) });
      res.json({ ok: true });
    } catch (e) {
      res.status(500).send();
    }
    client.close();
  });
});

export default router;
