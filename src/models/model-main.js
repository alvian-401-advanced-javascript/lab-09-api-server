'use strict';
/** class representing generic mongoose model */
class Model {
  /**
   * Model constructor, no params
   */
  constructor() {

  }
  /**
   * with _id param, returns one record of a model from db
   * otherwise returns all records
   * @param {*} _id 
   */
  get(_id) {
    if (_id) {
      return this.schema.findOne({ _id });
    }
    else { return this.schema.find({}); }
  }
  /**
   * creates new record of model
   * saves new record to db
   * @param {*} record 
   */
  post(record) {
    let newRecord = new this.schema(record);
    return newRecord.save();
  }
  /**
   * filters a record out by id
   * returns new complete record with same id
   * @param {*} id 
   * @param {*} record 
   */
  update(_id, record) {
    return this.schema.findByIdAndUpdate(_id, record, { new: true });

  }
  /**
   * filters a record out by id and removes it from db
   * @param {*} id 
   */
  delete(id) {
    return this.schema.findOneAndDelete({ _id: id });
  }


}

module.exports = Model;