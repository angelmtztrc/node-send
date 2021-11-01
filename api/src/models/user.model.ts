import Mongoose, { Schema } from 'mongoose';

import { User } from '../interfaces/user.interface';

const UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    unique: true,
    required: true
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    lowercase: true,
    required: true
  },
  password: {
    type: String,
    trim: true,
    required: true
  }
});

export default Mongoose.model<User>('User', UserSchema);
