const mongoose = require('mongoose')


const { Schema } = mongoose;

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
  }, {versionKey: false});

const Nft = mongoose.model('Nft', NftSchema );

module.exports = Nft

// const test_nftModel = new NftModel({
//   cid: 'testing2',
//   tokenId: 1,
//   creator: 'me',
//   account: 'me',
//   signature: 'signature'
// });
// test_nftModel.save(function (err) {
//     if (err) return handleError(err)
// })
  