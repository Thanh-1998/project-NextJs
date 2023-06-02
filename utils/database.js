import mongoose from "mongoose";

let isConnected = false;
export const connectToDB = async () => {
  mongoose.set('strictQurey', true)
  if (isConnected) {
    console.log('mogoDB connected');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'learn app',
      useNewUrlParser: true,
      useUnifiedTopolory: true
    })
    isConnected = true;

    console.log('is connected');
  } catch (error) {
    console.log(error);
  }
}