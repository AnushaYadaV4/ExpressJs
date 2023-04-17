const Sequilize=require('sequelize');
const sequelize=require('../helper/database');
const Product=sequelize.define('product',
{
  id:{
    type:Sequilize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  title:Sequilize.STRING,
  prince:{
    type:Sequilize.DOUBLE,
    allowNull:false
  },
  description:{
    type:Sequilize.STRING,
    allowNull:false
  },
  imgUrl:{
    type:Sequilize.STRING,
    allowNull:false
  }
});

module.exports=Product;

/*const db=require('../helper/database');

const Cart = require('./cart');



module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    return db.execute(
      'INSERT INTO products (title,price,description,imgUrl) VALUES(?,?,?,?)',
      [this.title,this.price,this.description,this.imageUrl])
    
  }

  static deleteById(id) {
    return db.execute('DELETE * FROM products WHERE prodducts.id=?',[id])
    
  }

  static fetchAll(cb) {
    return db.execute('SELECT * FROM products');

  }

  static findById(id, cb) {
    return db.execute('SELECT * FROM products WHERE products.id=?',[id]);
   
  }
};
*/