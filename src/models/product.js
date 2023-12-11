const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active'
  },
  images: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Image',
    }
  ]
});

module.exports = mongoose.model('Product', productSchema);
