import mongo from 'mongodb';
import { ObjectId } from 'mongodb';

const MongoClient = mongo.MongoClient;

const url = 'mongodb://127.0.0.1:27017/universidades';
const dbName = 'universidades';

const allAlumnos = (req, res) => {
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
};

const createAlumno = (req, res) => {
  const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  client.connect(async (err) => {
    const collection = client.db(dbName).collection('alumnos');
    const { nombre, edad, provincia } = req.body;
    try {
      const resultadoOperacion = await collection.insertOne({
        nombre,
        edad,
        provincia,
      });

      res.status(200).send(resultadoOperacion.ops);
    } catch (e) {
      res.status(500).send();
    } finally {
      client.close();
    }
  });
};

const showById = (req, res) => {
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
};

const updateById = (req, res) => {
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
};

const deleteById = (req, res) => {
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
    } finally {
      client.close();
    }
  });
};

export default { allAlumnos, createAlumno, showById, updateById, deleteById };
