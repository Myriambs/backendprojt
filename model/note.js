const mongoose = require('mongoose')

const noteSchema =mongoose.Schema({
  titre: {
    type: String,
    // required: true
  },
  description: {
    type: String,
    // required: true
  },
  categ: {
    type: String,
    // required: true
  },
  image: {
    type: String
  }
})

module.exports= mongoose.model('noteSchema',noteSchema)