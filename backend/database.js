import mongoose from 'mongoose';

const dbConnection = async () => {
  try {
    const link = 'mongodb+srv://anjanapasindu20:fqQYmfY9LUU9i5bB@employeecluster.htpi6xk.mongodb.net/Employee_Base?retryWrites=true&w=majority';
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
