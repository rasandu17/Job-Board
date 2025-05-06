const mongoose = require('mongoose')

const JobSchema = new mongoose.Schema({
        title:{
            type:String, 
            required:true
        },
        company:{
            type:String,
            required:true
        },
        description:{
            type:String
        },
        location:{
            type:String
        },
        createdAt:{
            type:Date,
            default:Date.now
        }
})

module.exports = mongoose.model('Job',JobSchema);