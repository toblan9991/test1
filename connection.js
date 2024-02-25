require('dotenv').config();

const { MongoClient } = require('mongodb');


const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Successfully connected to MongoDB Atlas!');
  } catch (error) {
    console.error('Connection to MongoDB Atlas failed:', error);
  }
}



module.exports = { connectToDatabase };
