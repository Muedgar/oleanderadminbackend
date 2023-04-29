const mongoose = require("mongoose");
const {Schema} = mongoose;

const AdmissionSchema = new Schema({
    admission: Object
},{ timestamps: true })

module.exports = mongoose.model("ADMISSION", AdmissionSchema);