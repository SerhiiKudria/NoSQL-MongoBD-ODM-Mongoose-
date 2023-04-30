const mongoose = require('mongoose');
const yup = require('yup');

const EMAIL_VALIDATION_SCHEMA = yup.string().email();

// required
// Number, Date: min, max
// String: match, emun, minLength, maxLength
// default
const phoneSchema = new mongoose.Schema(
  {
    brand: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 64,
    },
    model: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 64,
    },
    display: {
      type: Number,
      required: true,
      min: 2,
      max: 100
    },
    year: {
      type: Number,
      required: true,
      min: 1990,
      max: 2100
    },
    nfc: {
      type: Boolean,
      default: false,
    }
  },
  {
    versionKey: false,
  }
);

const Phone = mongoose.model('Phone', phoneSchema);

module.exports = Phone;
