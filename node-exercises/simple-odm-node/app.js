const mongoShield = require('./lib');

(async () => {
  const mongo = await mongoShield();
  console.log(mongo.mongoClient.db("test"));
  // mongo.document("test1", {
  //   title: {
  //     validators: ['required', 'unique']
  //   },
  //   body: {}
  // });
})();
