const mysql = require('mysql');

const con = mysql.createConnection({
  host: '172.22.0.1', // O host do banco. Ex: localhost
  user: 'root', // Um usuário do banco. Ex: user
  password: 'password', // A senha do usuário. Ex: user123
  database: 'db' // A base de dados a qual a aplicação irá se conectar, deve ser a mesma onde foi executado o Código 1. Ex: node_mysql
});

//usa o mudule.exports para exportar uma funcao
module.exports = con;

//é possivel exportar mais de uma funcao por arquivo
//module.exports.con = con;
//module.exports.funcao2 = funcao2;

//na tela que vc quer ler elas, usa:
//const {con, funcao2} = require(''./config/db'');
