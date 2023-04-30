const mongoose = require('mongoose');
const ObjectId=mongoose.Schema.ObjectId
const JobSchema = mongoose.Schema({
    userId: {
        type: ObjectId,
        required: true
    },
    offeredRole: {
        type: String,
        max: 80,
        required: true
    },
    companyName: {
        type: String,
        max: 80,
        required: true
    },
    deadline:{
        type: Date,
        // required: true
    },
    desc: {
        type: String,
        required: true,
    },
    location:{
        type: String,
        required: true
    },
    views: {
        type: Array,
        default: []
    }
}, 
{timestamps: true}
)

module.exports = mongoose.model('Job', JobSchema);