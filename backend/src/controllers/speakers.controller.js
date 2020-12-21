const { speakersService } = require('../services');
const { storage } = require('../config/env');

module.exports = {
  list: async (req, res) => {
    const { highlighted } = req.query;
    let filter = highlighted ? { highlighted } : {};
    const response = await speakersService.list(filter);

    if (!response || response.data.length === 0) {
      return res.status(204).end();
    }

    return res.status(200).json(response);
  },

  get: async (req, res) => {
    const { id } = req.params;
    const response = await speakersService.get(id);
    return res.status(200).json(response);
  },

  create: async (req, res) => {
    const { body } = req;
    const response = await speakersService.create(body);

    return res.status(200).json(response);
  },
  avatar: (req, res) => {
    const { filename } = req.file;
    return res.status(200).json({ avatar: `${storage}/files/${filename}` });
  },
  update: async (req, res) => {
    const {
      params: { id },
      body,
    } = req;
    const response = await speakersService.update(id, body);
    return res.status(200).json(response);
  },

  destroy: async (req, res) => {
    const { id } = req.params;
    await speakersService.destroy(id);
    return res.status(204).end();
  },
};
