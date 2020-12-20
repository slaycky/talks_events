const mongoose = require('mongoose');

const speakerSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    highlighted: {
      type: Boolean,
      required: true,
      default: false,
    },
    jobTitle: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    id: false,
    toObject: { getters: true },
    toJSON: { getters: true },
  },
);

module.exports.Speaker = mongoose.model('Speaker', speakerSchema);
