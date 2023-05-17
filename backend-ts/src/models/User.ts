import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  permission: {
    type: String,
    required: true,
  },
  function: {
    type: String,
    required: true,
  },
  tecnologies: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  phone: {
    type: String,
    required: false,
  },
  bio: {
    type: String,
    required: false,
  },
  dateBirth: {
    type: String,
    required: true,
  },
  avatar: {
    type: Buffer,
  },
});

UserSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});


const User = mongoose.model<{
  username: string;
  password: string;
  permission: string;
  function: string;
  tecnologies: string;
  email: string;
  phone: string;
  bio: string;
  dateBirth: string;
  avatar: Buffer;
}>('Users', UserSchema);


export default User;
