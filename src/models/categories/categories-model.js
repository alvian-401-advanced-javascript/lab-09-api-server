const Model = require('../model-main.js');
const schema = require('./categories-schema.js');

/**
 * extends primary model
 */
class Categories extends Model {

  constructor() {
    super();
    this.schema = schema;
  }


}

module.exports = Categories;