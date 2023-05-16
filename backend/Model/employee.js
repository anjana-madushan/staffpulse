import { mongoose } from 'mongoose';

const { Schema } = mongoose;

const empSchema = new Schema({
  fullName: {
    type: String,
    require: true,
  },
  nameInitials: {
    type: String,
    require: true,
  },
  preferredName: {
    type: String,
    require: true,
  },
  gender: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  joinDate: {
    type: Date,
    required: true,
  },
  Salary: {
    type: Number,
    required: true,
  },
  notes: {
    type: String,
    require: true,
  },

});

export default mongoose.model('Employee', empSchema);
