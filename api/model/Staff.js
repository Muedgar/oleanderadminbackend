const mongoose = require("mongoose");
const {Schema} = mongoose;

const StaffSchema = new Schema({
    staff: Object
},{ timestamps: true })

module.exports = mongoose.model("Staff", StaffSchema);