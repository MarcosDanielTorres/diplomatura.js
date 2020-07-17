import express from 'express';
import * as helpers from '../helpers';
import mongo from 'mongodb';
import { ObjectId } from 'mongodb';

const profesores = express.Router();

const MongoClient = mongo.MongoClient;

const url = 'mongodb://localhost:27017/universidades';
const dbName = 'universidades';


helpers.GET(profesores, "profesores");

profesores.get('/:id', function (req, res) {
    const client = new MongoClient(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  
    client.connect(async (err) => {
      const collection = client.db(dbName).collection("profesores");
      try {
        const profesor = await collection.findOne({
          _id: new ObjectId(req.params.id),
        });
  
        if (!profesor) throw new Error();
  
        res.send(profesor);
      } catch (e) {
        res.status(500).send();
      } finally {
        client.close();
      }
    });
  });

  profesores.post('/', function (req, res) {
    const client = new MongoClient(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  
    client.connect(async (err) => {
      const collection = client.db(dbName).collection('profesores');
      try {
        await collection.insertOne({
          id: req.body.id,
          nombre: req.body.nombre,
        });
      } catch (e) {
        res.status(500).send();
      }
      res.status(200).send({ ok: true });
      client.close();
    });
  });

  profesores.put('/:id', (req, res) => {

    const client = new MongoClient(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  
    client.connect(async (err) => {
      const collection = client.db(dbName).collection('profesores');
  
      const updates = Object.keys(req.body);
      const allowedUpdates = ['id', 'nombre'];
  
  
      const isValidOperation = updates.every((update) =>
        allowedUpdates.includes(update)
      );
      if (!isValidOperation)
        return res.status(400).send({ error: 'Invalid key name' });
  
      try {
        const profesor = await collection.findOneAndUpdate(
          { _id: new ObjectId(req.params.id) },
          {
            $set: {
              id: req.body.id,
              nombre: req.body.nombre,
            },
          }
        );
  
        if (!profesor) throw new Error();
  
        res.send(profesor);
      } catch (e) {
        res.status(500).send();
      } finally {
        client.close();
      }
    });
  });
  
  profesores.delete('/:id', (req, res) => {
    const client = new MongoClient(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  
    client.connect(async (err) => {
      const collection = client.db(dbName).collection('profesores');
      try {
        await collection.deleteOne({ _id: new ObjectId(req.params.id) });
        res.json({ ok: true });
      } catch (e) {
        res.status(500).send();
      }
      client.close();
    });
  });

export default profesores;