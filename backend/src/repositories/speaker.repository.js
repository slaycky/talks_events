const { Speaker } = require('../models');

module.exports = {
  list: (query) => Speaker.find(query),
  getById: (id) => Speaker.findById(id),
  get: (params) => Speaker.findOne(params),
  create: (params) => Speaker.create(params),
  update: (Speaker) => Speaker.save(),
  destroy: (id) => Speaker.findByIdAndDelete(id),
};
