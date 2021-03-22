require('dotenv').config()
const mongoose = require('mongoose')
const mongooseUniqueValidator = require('mongoose-unique-validator')
const config = require('../utils/config')
const url = config.MONGODB_URL
console.log(url)

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        required: true,
        unique: true

    },
    number: {
        type: String,
        minglength: 8,
        required: true
    }
})

personSchema.plugin(mongooseUniqueValidator)

personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id=returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})


module.exports = mongoose.model('Person', personSchema)




