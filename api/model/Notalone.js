const mongoose = require("mongoose");
const {Schema} = mongoose;

const NotAloneSchema = new Schema({
    notAlone: Object
},{ timestamps: true })

module.exports = mongoose.model("NOTALONE", NotAloneSchema);