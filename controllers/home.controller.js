const contactModel = require('../models/contact');
const validatorResult = require('express-validator').validationResult;
exports.getHome = (req, res, next) => {
    res.render('index', {
        messages: ''
    });
}

exports.postContact = (req, res, next) => {
    if (validatorResult(req).array().length > 0) {
        res.render('index', {
           messages: 'failed'
        });
    }
    else {
        contactModel.addContact(req.body).then((data) => {
            res.render('index', {
                messages: 'success'
            });
        }).catch((err) => {
            res.render('index', {
                messages: 'failed'
            });
        });
    }
    
}