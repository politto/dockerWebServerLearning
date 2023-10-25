let mongoose = require('mongoose');
const url = 'mongodb+srv://helpmeplz:public_static_void_main_string_args@collalearn-table.nujma2x.mongodb.net/?retryWrites=true&w=majority';
// const url = 'mongodb://root:public@db:27017';
const connectDB = async () => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("database connected");
    }
    catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

module.exports = connectDB;
// import * as mongoDB from "mongodb";
// import * as dotenv from "dotenv";
// 
// export const collections: { games?: mongoDB.Collection } = {}
// 
// export async function connectToDatabase () {
//     dotenv.config();
//  
//     const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING);
//             
//     await client.connect();
//         
//     const db: mongoDB.Db = client.db(process.env.DB_NAME);
//    
//     const gamesCollection: mongoDB.Collection = db.collection(process.env.COLLECTION_NAME);
//  
//     collections.games = gamesCollection;
//        
//          console.log(`Successfully connected to database: ${db.databaseName} and collection: ${gamesCollection.collectionName}`);
//  }