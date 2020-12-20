const router = require('express').Router();
const { speakersController } = require('../controllers');
const { validate, uploader } = require('../middlewares');

const {
  validationSchemas: { speakers },
} = require('../helpers');

router.get('/', validate(speakers.list), speakersController.list);
router.get('/:id', validate(speakers.get), speakersController.get);
router.post('/', validate(speakers.create), speakersController.create);
router.put('/:id', validate(speakers.update), speakersController.update);
router.delete('/:id', validate(speakers.destroy), speakersController.destroy);
router.post('/avatar', uploader.uploader.single('file'), speakersController.avatar);
module.exports.speakers = router;
