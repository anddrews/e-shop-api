import fs from 'fs';
import path from 'path';
import {Product} from '../models';

class Dao {
  constructor() {
    const basicPath = path.dirname(path.dirname(path.resolve(require.main.filename)));
    this.pathToFile = path.resolve(basicPath,'./assets/products.json');
    this.products =
      JSON.parse(fs.readFileSync(this.pathToFile, 'utf8')).map(item => new Product(item));
  }

  getItems() {
    const {products} = this;
    return new Promise((res, rej) => {
      res(products.map(item => item.getShortInfo()))
    })
  }
  
  getItem(id) {
    const {products} = this;
    return new Promise((res, rej) => {
      const product = products.find(({product: {id: productId}}) => productId === id);
      if (product) {
        res(product.getFullInfo());
      } else {
        rej('product id not found');
      }
    })
  }
  
  getItemDescription(id) {
    const {products} = this;
    return new Promise((res, rej) => {
      const product = products.find(({product: {id: productId}}) => productId === id);
      if (product) {
        res(product.getDescription());
      } else {
        rej('product id not found');
      }
    })
  }

  updateItem(id, updatedProp) {
    const {products} = this;
    
    return new Promise((res, rej) => {
      const product = products.find(({product: {id: productId}}) => productId === id);
      if (product) {
        res(product.update(updatedProp))
      } else {
        rej('product id not found')
      }
    })
  }

  deleteItem(id) {
    return new Promise((res, rej) => {
      this.products = this.products.filter(({product: {id: productId}}) => productId !== id);
      res({id})
    })
  }

  addItem(product) {
    return new Promise((res, rej) => {
      const idList = this.products.map(({product: {id}}) => id);
      const id = idList.length > 0 ? Math.max(...idList) + 1 : 1;
      const newProduct = new Product({...product, id});
      this.products.push(newProduct);
      res(newProduct);
    })
  }
}

export const dao = new Dao();
