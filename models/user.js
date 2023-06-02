import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Email already exPists!'],
    required: [true, 'Email is required!'],
  },
  userName: {
    type: String,
    required: [true, 'Username is required'],
    match: [/^(?=.{8,20}$)(?![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
  },
  iamge: {
    type: String
  }
});

const User = models.User || model('User', UserSchema);
export default User;