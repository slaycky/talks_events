const { speakersRepository } = require('../../repositories');

module.exports.list = async (options) => {
  console.log('stou');
  const speakers = await speakersRepository.list(options);
  return {
    data: speakers,
  };
};
