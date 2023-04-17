const Sequelize=require('sequelize');
const sequelize=new Sequelize('node-complete','root','@Anusha468',{
    dialect:'mysql',
    host:'localhost',

});

module.exports=sequelize;

/*const mysql=require('mysql2');
const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    database:'node-complete',
    password:'@Anusha468'
})

module.exports=pool.promise();
*/