const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true
  },
  priority: {
    type: Number,
    default: 1000
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: false
  }
});

module.exports = mongoose.model('Image', imageSchema);
