const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema(
    {
        name: { type: String, maxLength: 255, required: true },
        email: { type: String, maxLength: 500, required: true },
        age: { type: String, maxLength: 255,  required: true },
        address: { type: String, required: true },
        phone: { type: String, maxLength: 100, required: true },
        image: { type: String, required: true }
    }, {
        timestamps: true,
    }
);

module.exports = mongoose.model('User', User);
// auto convert User -> users and connect to collection users
// module.exports = mongoose.model('users', User);
