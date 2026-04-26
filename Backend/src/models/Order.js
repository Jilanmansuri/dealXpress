import mongoose from 'mongoose';

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    orderId: {
      type: String,
      required: true,
    },
    product: {
      name: { type: String, required: true },
      image: { type: String, required: true },
    },
    status: {
      type: String,
      required: true,
      default: 'Processing',
    },
    statusColor: {
      type: String,
      required: true,
      default: 'amber',
    },
    courier: {
      type: String,
      required: true,
      default: 'Assigning Courier...',
    },
    trackingId: {
      type: String,
      required: true,
      default: 'Pending',
    },
    location: {
      type: String,
      required: true,
    },
    estDelivery: {
      type: String,
      required: true,
      default: 'In 3-5 Business Days',
    },
    progress: {
      type: Number,
      required: true,
      default: 10,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model('Order', orderSchema);

export default Order;
