const mongoose = require('mongoose')


const programmerSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    tech: {
        type: String,
        required: true
    },
    subs: {
        type: Boolean,
        required: true,
        default: false
    }

})

module.exports = mongoose.model('programmer',programmerSchema)