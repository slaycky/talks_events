const { speakersRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');

module.exports.update = async (id, body) => {
  const speaker = await speakersRepository.getById(id);
  if (!speaker) {
    throw new ApplicationError('speaker not found', 404);
  }
  Object.assign(speaker, body);

  return speakersRepository.update(speaker);
};
