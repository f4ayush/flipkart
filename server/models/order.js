import mongoose from 'mongoose';
const { Schema } = mongoose;

const orderSchema = new Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          required: true
        },
        quantity: {
          type: Number,
          required: true
        }
      }
    ],
    status: {
      type: String,
      enum: ['Pending', 'Shipped', 'Delivered'],
      default: 'Pending'
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  });

  const Order = mongoose.model('Order', orderSchema);
  export default Order