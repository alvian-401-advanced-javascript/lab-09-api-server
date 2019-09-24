const Model = require('../model-main.js');
const schema = require('./todo-schema.js');

/**
 * extends primary model
 */
class Todo extends Model {

  constructor() {
    super();
    this.schema = schema;
  }


}

module.exports = Todo;