/* eslint-disable no-console */
// tslint:disable-next-line: no-implicit-dependencies
const { Speaker } = require('../models');
const database = require('../config/database/mongodb');
const data = require('./data.json');

const { storage } = require('../config/env');
const populateSpeaker = async () => {
  try {
    console.log('Populate Speaker!');
    // const s = await Speaker.create({
    //   title: 'ala',
    //   jobTitle: 'ta vendo',
    //   highlighted: true,
    //   avatar: `ht`,
    // });
    // console.log('SPEAKDER', s);
    for (let i = 0; i < data.length; i++) {
      console.log(`${data[i].title}`);
      const s = await Speaker.create({
        title: data[i].title,
        jobTitle: data[i].jobTitle,
        highlighted: data[i].highlighted,
        avatar: `${storage}/${data[i].avatar}`,
      });
      console.log('SPEAKDER', s);
    }
  } catch (error) {
    console.error(error);
  }
};

const runPopulate = async () => {
  try {
    database.connect();
    console.log('Mongoose connected!');

    await populateSpeaker();
  } catch (error) {
    console.error(error);
  }
};

runPopulate()
  .then(() => {
    console.log('Seed finished');
    process.exit(0);
  })
  .catch((e) => {
    console.log('Seed failed: ', e);
    process.exit(0);
  });
