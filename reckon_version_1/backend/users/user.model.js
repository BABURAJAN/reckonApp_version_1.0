const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    hash: { type: String, required: true },
    contactNumber: { type: Number, required: true },
    address1: { type: String, required: true },
    address2: { type: String },
    country: { type: String, required: true },
    state: { type: String, required: true },
    district: { type: String,required: true },
    pincode: { type: Number, required: true },
    gender: { type: String, required: true },
    role: { type: String, required: true },
    createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});

module.exports = mongoose.model('User', schema);