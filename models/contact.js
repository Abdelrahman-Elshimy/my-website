const mongoose = require('mongoose');
const DB_URL = 'mongodb://localhost:27017/portfolio';

const contactSchema = mongoose.Schema({
    name: String,
    email: String,
    message: {
        type: String,
        default: 'No Message'
    },
    reason: {
        type: String,
        default: 'No Reason'
    },
    details: {
        type: String,
        default: 'No Details',
    },
    language: {
        type: String,
        default: 'No Language',
    },
    type: {
        type: String,
        default: 'No Type',
    },
    platform: {
        type: String,
        default: 'No Platform'
    }
});

const contactModel = mongoose.model('contact', contactSchema);

exports.addContact = async (data) => {
    try {
        await mongoose.connect(DB_URL, {useNewUrlParser: true})
        var user = new contactModel(data);
        var newuser = user.save();
        return newuser;
        
    } catch (error) {
        mongoose.disconnect();
        throw new Error(error);
    }
}