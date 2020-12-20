const { speakersRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');

module.exports.get = async (id) => {
  const speaker = await speakersRepository.getById(id);
  if (!speaker) {
    throw new ApplicationError('speaker not found', 404);
  }

  return speaker;
};
