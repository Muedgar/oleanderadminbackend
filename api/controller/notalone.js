const NOTALONE = require("../model/Notalone");


const getNotAloneInfo = async(req,res) => {
    const notaloneinfo = await NOTALONE.find({}).exec();
    res.status(200).json(notaloneinfo);
}

const saveNotAlone = async(req,res) => {
    try {
        await NOTALONE.deleteMany({});
        
        let obj = req.body;
        await NOTALONE.create({notAlone: obj})
        .then(d => {
            res.status(201).json({message: 'information saved successfully.'})
        })
        .catch(e => new Error(e))
    }catch(err) {
        res.status(500).json({message: err.message})
    }
}

module.exports = {
    saveNotAlone,
    getNotAloneInfo
}