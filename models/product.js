const db=require('../helper/database');

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