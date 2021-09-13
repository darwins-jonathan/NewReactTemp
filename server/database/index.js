const mongoose = require('mongoose');
require('./schemas/index')

const database = mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('Connected to database.', process.env.DATABASE_URL))
  .catch(err => console.error('Error connecting to database:', err.message));

// const Schema = mongoose.Schema;

// const SomeModelSchema = new Schema({
//     aString: String,
//   });

// const SomeModel = mongoose.model('SomeModel', SomeModelSchema );

// const testModel = new SomeModel({aString: 'testing'});
// testModel.save(function (err) {
//     if (err) {return handleError(err)}
// })

// const NftSchema = new Schema({
//     cid: String,
//   });

// const NftModel = mongoose.model('NftModel', NftSchema );

// const test_nftModel = new NftModel({cid: 'testing'});
// test_nftModel.save(function (err) {
//     if (err) return handleError(err)
// })

module.exports = database;