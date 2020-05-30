const mongo = require('mongodb');
const is = require('is');

const defaultURI = "mongodb://localhost:27017";

const mongoShield = async (urlOrDb) => {
  const object = {};
  let mongoClient;

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
    console.log('1st one', mongoClient);
    const response = await mongoClient.connect();
    console.log('2nd one', response);
  };

  await initialize(urlOrDb);

  object.mongoClient = mongoClient;

  // object.document
  return object;
}


module.exports = mongoShield;