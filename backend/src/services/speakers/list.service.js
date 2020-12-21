const { speakersRepository } = require('../../repositories');

module.exports.list = async (options) => {
  const speakers = await speakersRepository.list(options);
  return {
    data: speakers,
  };
};
