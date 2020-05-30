const mongo = require('mongodb');
const is = require('is');

const defaultURI = "mongodb://localhost:27017";

const mongoShield = async (urlOrDb) => {
  const object = {};
  let mongoClient;

  object.db = (dbName) => {
    if (!is.string(dbName.trim())) {
      throw TypeError(`db name should be string. input send is ${dbName}`);
    }

    return mongoClient.db(dbName);
  };

  const initialize = async (urlOrDb) => {
    let connectionURI = defaultURI;

    if (!is.undefined(urlOrDb) && !is.null(urlOrDb)) {
      if (typeof urlOrDb !== 'string') {
        throw Error(`expects string value only, and got typeof ${urlOrDb}`);
      }

      inputUrlOrDb = urlOrDb.trim();

      if (inputUrlOrDb.length <= 0) {
        throw Error(`empty value can't be accepted`);
      }

      if (!inputUrlOrDb.includes("/")) {
        connectionURI += inputUrlOrDb;
      }
    }

    mongoClient = new mongo.MongoClient(connectionURI, { useUnifiedTopology: true });
    await mongoClient.connect();
  };

  await initialize(urlOrDb);

  object.mongoClient = mongoClient;
  return object;
}


module.exports = mongoShield;