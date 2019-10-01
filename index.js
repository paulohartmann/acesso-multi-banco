const express = require('express');

const PORT = 3000;
const HOST = '0.0.0.0';

const mysql = require('mysql');

const con = mysql.createConnection({
    host: '172.22.0.1', // O host do banco. Ex: localhost
    user: 'root', // Um usuário do banco. Ex: user 
    password: 'password', // A senha do usuário. Ex: user123
    database: 'db' // A base de dados a qual a aplicação irá se conectar, deve ser a mesma onde foi executado o Código 1. Ex: node_mysql
});

con.connect((err) => {
    if (err) {
        console.log('Erro ao conectar...', err)
        return
    }
    console.log('Conexão Okay...')
})

const app = express();

app.get('/', (req, res) => {
  res.send('hellou worldi 2.0');
});

app.listen(PORT, HOST, () => {
  console.log('papai online, agora com bd');
});
