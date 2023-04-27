const mongoose = require("mongoose");
const {Schema} = mongoose;

const SchoolEventSchema = new Schema({
    schoolevent: Object
},{ timestamps: true })

module.exports = mongoose.model("SCHOOLEVENT", SchoolEventSchema);