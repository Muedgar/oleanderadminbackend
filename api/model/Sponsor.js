const mongoose = require("mongoose");
const {Schema} = mongoose;

const SponsorSchema = new Schema({
    sponsor: Object
},{ timestamps: true })

module.exports = mongoose.model("SPONSOR", SponsorSchema);