const mongoose = require('mongoose')


const Schema = mongoose.Schema;

const NftSchema = new Schema({
    cid: {
        type: String
      },
      tokenId: {
        type: Number,
        index: true
      },
      creator: {
        type: String
      },
      account: {
        type: String
      },
      signature: {
        type: String
      }
  });

const NftModel = mongoose.model('NftModel', NftSchema );

module.export = NftModel

// const test_nftModel = new NftModel({cid: 'testing1'});
// test_nftModel.save(function (err) {
//     if (err) return handleError(err)
// })
  