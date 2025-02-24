import mongoose from 'mongoose';

const { Schema } = mongoose;

const orgSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  // userCount: {
  //   type: Number,
  //   require: true,
  // },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Organization', orgSchema);
