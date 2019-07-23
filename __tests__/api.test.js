'use strict';

/**
 * @jest-environment node
 */

const { server } = require('../src/server.js');
const supergoose = require('./supergoose.js');
const mockRequest = supergoose(server);

let endpath;

beforeEach(() => {
  let arr = ['categories']; //arr[0] can be changed to test any available path
  arr.forEach(path => {
    endpath = path;
  });
});

describe('All APIs', () => {
  it('can post() a new category or product', () => {
    let obj = { name: 'John', description: 'teacher' };
    return mockRequest.post(`/api/v1/${endpath}`)
      .send(obj)
      .then(entry => {
        let record = entry.body;
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });

  it('can get() a single category or product', () => {
    let obj = { name: 'John', description: 'teacher' };
    return mockRequest.post(`/api/v1/${endpath}`)
      .send(obj)
      .then(data => {
        return mockRequest.get(`/api/v1/${endpath}/${data.body._id}`)
          .then(response => {
            response = response.body;
            Object.keys(obj).forEach(key => {
              expect(response[key]).toEqual(obj[key]);
            });
          });
      });
  });

  it('can get() a all categories or products', () => {
    let obj = { name: 'Ryan', description: 'TA' };

    return mockRequest.post(`/api/v1/${endpath}`)
      .send(obj)
      .then(data => {
        return mockRequest.get(`/api/v1/${endpath}`)
          .then(response => {
            response = response.body;
            expect(response.count).toEqual(3); //3rd test, so mock should have 3 entries at this point

          });
      });
  });

  it('can delete() a category or product', () => {

    let obj = { name: 'delete me', description: 'deleted' };
    return mockRequest.post(`/api/v1/${endpath}`)
      .send(obj)
      .then(createdObj => {
        return mockRequest.delete(`/api/v1/${endpath}/${createdObj.body._id}`)
          .then(deletedRecord => {
            expect(deletedRecord.body.name).toEqual('delete me');
          });
      });
  });

  xit('can update() a category or product', () => {
    let obj = { name: 'update me', description: 'please' };
    return mockRequest.post(`/api/v1/${endpath}`)
      .send(obj)
      .then(createdObj => {
        let updatedObj = { name: 'updated', description: 'okay', _id: createdObj.body._id };
        return mockRequest.put(`/api/v1/${endpath}/${createdObj.body._id}`)
          .send(updatedObj)
          .then(updatedRecord => {
            console.log('this is the updated record', updatedRecord.body); 
            expect(updatedRecord.body.name).toEqual('updated');
          });
      });
  });

  it('throws 404 error on invalid path', () => {
    let error = { error: 'Resource Not Found' };
    return mockRequest.get(`/api/v1/notapath`)
      .then(data => {
        expect(data.body).toEqual(error);
      });
  });

});