import mongoose from "mongoose";


const dbConnection = async() => {

    try{
        const link = "mongodb+srv://anjanapasindu20:fqQYmfY9LUU9i5bB@employeecluster.htpi6xk.mongodb.net/?retryWrites=true&w=majority"
        mongoose.connect(link, {
            useNewUrlParser: true,
            useUnifiedTopology: true
         });
        
        const connection = mongoose.connection;
        connection.once("open", () => {
        console.log("MongoDB Connection Success!");
 });
    }catch(err){
        console.error('Database connection error:', err)
    }

    
}

export default dbConnection