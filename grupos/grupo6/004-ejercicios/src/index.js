import express from 'express';
const app = express();
import postsRoutes from './controllers/posts';
import usersApi from './controllers/users';
import albumRoutes from './controllers/albums';
import moment from 'moment';
import os from 'os';

const PORT = 8080;
const FORMATE_DATE = 'MMMM Do YYYY h:mm:ss a'
moment.locale('es');
let serverStartUpTime;

app.use('/posts', postsRoutes);
app.use('/albums', albumRoutes);
app.use('/users', usersApi);

// Implementar el endpoint de stats aca. GET "/"
app.get('/', function (req, res) {
  const now = new Date().getTime();
  const resultado = {
    serverCurrentTime: moment().format(FORMATE_DATE),
    serverStartUpTime: serverStartUpTime.format(FORMATE_DATE),
    serverUpTime: serverStartUpTime.startOf('minutes').fromNow(),

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

app.listen(PORT, ()=>{
  console.log(`Express started on port ${PORT}`);
  serverStartUpTime = moment();
});

