const express = require('express');
const path = require('path');
const con = require('./config/db');

//isso e as informações do banco de dados devem estar dentro de um arquivo '.env'
const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

//static public folder
app.use(express.static(path.join(__dirname, '/public')));

//Body parser middleware
app.use(express.json());

con.connect(err => {
  if (err) {
    console.log('Erro ao conectar...', err);
    return;
  }
  console.log('Conexão Okay...');
});

//import routes
const mysqlRoute = require('./app/routes/mysqlRoute');

app.use('/mysql', mysqlRoute);

app.get('/', (req, res) => {
  res.send(
    'hellou worldi 2.0 index (try: GET/mysql and with param: GET/mysql/10)'
  );
});

app.listen(PORT, HOST, () => {
  console.log('papai online, agora com bd');
});
