const mongoose = require("mongoose");
const {Schema} = mongoose;

const NewsSchema = new Schema({
    news: Object
},{ timestamps: true })

module.exports = mongoose.model("NEWS", NewsSchema);