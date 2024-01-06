/* eslint-disable import/no-extraneous-dependencies */
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const dbConnection = async () => {
  try {
    const link = process.env.EMP_DB_LINK;
    mongoose.connect(link, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const { connection } = mongoose;
    connection.once('open', () => {
      console.log('MongoDB Connection Success!');
    });
  } catch (err) {
    console.error('Database connection error:', err);
  }
};

export default dbConnection;
