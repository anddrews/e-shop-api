import {omitBy} from 'lodash';

export class Product {
  constructor(product) {
    this.product = product;
  }
  
  getShortInfo() {
    return omitBy(this.product, (value, key) => key === 'description');
  }
  
  getFullInfo() {
    return this.product;
  }
  
  getDescription() {
    const {description} = this.product;
    return {description};
  }
  
  update(updatedProp) {
    this.product = {...this.product, ...updatedProp};
    return this.product;
  }
}