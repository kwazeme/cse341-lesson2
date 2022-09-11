const {MongoClient} = require('mongodb');

const dotenv = require('dotenv');
dotenv.config();

async function main() {
    const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.tnnosrb.mongodb.net/?retryWrites=true&w=majority`;

    const client = new MongoClient(uri);

    try {
        await client.connect();

        // call listDatabases function
        await listDatabases(client);
    } catch (e) {
        console.error(e);
        
    } finally {
        await client.close();
    }
    
}

main().catch(console.error);

// List databases in the console
async function listDatabases(client) {
   const databasesList =  await client.db().admin().listDatabases();

   console.log("Databases");
   databasesList.databases.forEach(db => {
    console.log(`- ${db.name}`);
    
   });
}