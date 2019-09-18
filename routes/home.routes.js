const router = require('express').Router();
const bodyParser = require('body-parser');
const bodyParserM = bodyParser.urlencoded({
    extended: true,
});
const check = require('express-validator').check;

const homeController = require('../controllers/home.controller');

router.get('/', homeController.getHome);
router.post('/', bodyParserM,
check('name').not().isEmpty().withMessage('Name is required'),
check('email').not().isEmpty().withMessage('E-mail is required'),

 homeController.postContact);

module.exports = router;