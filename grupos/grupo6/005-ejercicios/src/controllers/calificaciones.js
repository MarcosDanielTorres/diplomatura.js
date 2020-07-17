import express from 'express';
const router = express.Router();
import mongo from 'mongodb';
import {ObjectId} from 'mongodb';

const MongoClient = mongo.MongoClient

const url = 'mongodb://localhost:27017/universidades';
const dbName = 'universidades';


router.get('/', function (req, res) {
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true});

  client.connect(async err => {
    const collection = client.db(dbName).collection("calificaciones");
    try{
      const result = await collection.find({}).toArray();
      client.close();
      res.send(result);
    }catch(e){
    client.close();
      res.status(500).send();
    }
  });
});

router.get('/:id', function (req, res) {
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true});

  client.connect(async err => {
    const collection = client.db(dbName).collection("calificaciones");
    try{
      const calificacion = await collection.findOne({"_id": new ObjectId(req.params.id)});

      if(!calificacion)
        throw new Error();

      client.close();
      res.send(calificacion);
    }catch(e){
      client.close();
      res.status(500).send();
    }
  });
});

router.post('/', function (req, res) {
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true});

  client.connect(async err => {
    const collection = client.db(dbName).collection("calificaciones");
    try{
      await collection.insertOne({
        alumno: req.body.alumno,
        materia: req.body.materia,
        nota: req.body.nota,
      })
    }catch(e){
      res.status(500).send();
    }
    res.status(200).send();
    client.close();
  });
});

router.put('/:id', (req, res) =>{
  // Mejorar esta ruta, resulta que si se elije no updatear algun valor le queda nulo en vez de conservar el anterior.
  // Para que esto funcione deben updatearse todos los atributos del "modelo".

  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true});

  client.connect(async err => {
    const collection = client.db(dbName).collection("calificaciones");

    const updates = Object.keys(req.body);
    const allowedUpdates = ['alumno', 'materia', 'nota'];

    const isValidOperation = updates.every((update) =>
      allowedUpdates.includes(update)
    );
    if (!isValidOperation)
      return res.status(400).send({ error: 'Invalid key name' });

    try{
      const calificacion = await collection.findOneAndUpdate({"_id": new ObjectId(req.params.id)},
      {
        $set:
          {
            alumno: req.body.alumno,
            materia: req.body.materia,
            nota: req.body.nota,
          }
      });

      if(!calificacion)
        throw new Error();
        
      client.close();
      res.send(calificacion);
    }catch(e){
      client.close();
      res.status(500).send();
    }
  });

})

router.delete('/:id', (req, res) =>{
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true});

  client.connect(async err => {
    const collection = client.db(dbName).collection("calificaciones");
    try{
      await collection.deleteOne({"_id": new ObjectId(req.params.id)})
      res.json({"ok": true})
    }catch(e){
      res.status(500).send();
    }
    client.close();
  });
})



export default router;