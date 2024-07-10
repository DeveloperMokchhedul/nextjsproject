import mongoose from "mongoose";

const MONGO_DB_URL = 'mongodb+srv://datawork:mokchhedulislam@cluster0.oovfcc5.mongodb.net/nextjs?retryWrites=true&w=majority&appName=Cluster0'


mongoose.connect(MONGO_DB_URL);

const db = mongoose.connection;

db.on('connected', ()=>{
    console.log("database connection successfully");
})
db.on('disconnected', ()=>{
    console.log("database connection successfully");
})

export default db;