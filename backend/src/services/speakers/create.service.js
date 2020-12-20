const { speakersRepository } = require('../../repositories');

module.exports.create = async (params) => {
  return speakersRepository.create(params);
};
