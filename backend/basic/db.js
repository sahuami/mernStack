import mongoose from "mongoose"


// define the mongoDB connection url
const mongoURL = 'mongodb://localhost:27017/myDatabase'  //replace 'mydatabase' with your any name 
mongoose.connect(mongoURL)


//get the default connection
// Mongoose maintain a default connection object representing the mongodb connection
const db = mongoose.connection;

db.on('connected', () => {
    console.log("connected to mongodb server")
})
db.on('error', (err) => {
    console.log("mongodb connection error", err)
})
db.on('disconnected', () => {
    console.log("mongodb disconnected")
})


//Export the database connection
export default db;











