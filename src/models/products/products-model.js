const Model = require('../model-main.js');
const schema = require('./products-schema.js');

/**
 * extends the model class
 */
class Products extends Model {
  /**
   * defines schema to be passed into main model
   */
  constructor() {
    super();
    this.schema = schema;
    
  }


}

module.exports = Products;