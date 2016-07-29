var orm = require('../config/orm.js');


var addOrConsumeBurger = {
  addBurger: function(nameInput, cb){
    orm.insertOne("burgers", nameInput, cb);
  },
  consumeBurger: function(inputId, cb){
    orm.updateOne("burgers", inputId, cb);
  },
  findAllBurgers: function(cb) {
    orm.selectAll(cb);
  }
};

module.exports = addOrConsumeBurger;