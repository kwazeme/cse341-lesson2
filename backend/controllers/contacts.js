// Contacts Controller

// const mongodb = require('../db/connect');
// const ObjectId = require('mongodb').ObjectId;

// const getContacts = async (req, res, next) => {
//   const result = await mongodb.getDb().db().collection('contacts').find();
//   result.toArray().then((lists) => {
//     res.setHeader('Content-Type', 'application/json');
//     res.status(200).json(lists);
//   });
// };

// const getOneContact = async (req, res, next) => {
//   const userId = new ObjectId(req.params.id);
//     const uri = dbconnect.mongodb_URI;
//     const client = new MongoClient(uri);
//     try {
//       const db = await client.connect();
//       db.collection('contacts').find();
     
//   } catch (e) {
//       console.error(e);
      
//   } finally {
//       await client.close();
//   }
//     .collection('contacts')
//     .find({ _id: userId });
//   result.toArray().then((lists) => {
//     res.setHeader('Content-Type', 'application/json');
//     res.status(200).json(lists[0]);
//   });
// };

// const dbconnect = require('../backend/db/connect');

// const {MongoClient} = require('mongodb');

// async function main() {
//     const uri = dbconnect.mongodb_URI;

//     const client = new MongoClient(uri);

//     try {
//         await client.connect();

//         // call listDatabases function
//         await listDatabases(client);
//     } catch (e) {
//         console.error(e);
        
//     } finally {
//         await client.close();
//     }
    
// }
     




// module.exports = { getContacts, getOneContact };

const mongodb = require('../db/mongodb');
const ObjectId = require('mongodb').ObjectId;

const getContacts = async (req, res, next) => {
  const result = await mongodb.getDb().db().collection('contacts').find();
  result.toArray().then((data) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(data);
  });
};

const getOneContact = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db().collection('contacts').find({ _id: userId });
  result.toArray().then((data) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(data[0]);
  });
};

module.exports = {
  getContacts,
  getOneContact
};
