import express from 'express';
const app = express();
import postsRoutes from './controllers/posts';
import albumRoutes from './controllers/albums';
import moment from 'moment';
import os from 'os';

const PORT = 8080;

app.use('/posts', postsRoutes);
app.use('/albums', albumRoutes);

// Implementar el endpoint de stats aca. GET "/"
app.get('/', function (req, res) {
  const resultado = {
    serverCurrentTime: moment().format('MMMM Do YYYY, h:mm:ss a'),
    serverStartUpTime: moment().startOf('minutes').fromNow(),
    serverUpTime: moment("20200703", "YYYYMMDD").fromNow(),

    status: {
      freemem: os.freemem(),
      totalmem:  os.totalmem(),
      uptime: os.uptime(),
      hostname:  os.hostname(),
      platform: os.platform(),
    },
  }
  res.send(resultado);
});

app.listen(PORT);
console.log(`Express started on port ${PORT}`);

