const { speakersRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');

module.exports.destroy = async (id) => {
  const speaker = await speakersRepository.getById(id);
  if (!speaker) {
    throw new ApplicationError('Speaker not found', 404);
  }

  return speakersRepository.destroy(id);
};
