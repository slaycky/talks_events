const yup = require('yup');

const list = {
  query: yup.object().shape({
    highlighted: yup.boolean(),
  }),
};
const get = {
  params: yup.object().shape({
    id: yup.string().matches(/^[0-9a-fA-F]{24}$/, 'id must be a valid mongo id'),
  }),
};
const create = {
  body: yup.object().shape({
    title: yup.string().required(),
    jobTitle: yup.string().required(),
    highlighted: yup.boolean().required(),
    avatar: yup.string().required(),
  }),
};

const update = {
  params: yup.object().shape({
    id: yup.string().matches(/^[0-9a-fA-F]{24}$/, 'id must be a valid mongo id'),
  }),
  body: yup.object().shape({
    title: yup.string().required(),
    jobTitle: yup.string().required(),
    highlighted: yup.boolean().required(),
    avatar: yup.string().required(),
  }),
};

const destroy = {
  params: yup.object().shape({
    id: yup.string().matches(/^[0-9a-fA-F]{24}$/, 'id must be a valid mongo id'),
  }),
};

module.exports.speakers = {
  list,
  get,
  create,
  update,
  destroy,
};
