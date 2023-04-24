const News = require("../model/News");
const NOTALONE = require("../model/Notalone");
const SchoolEvent = require("../model/SchoolEvent");
const Staff = require("../model/Staff");

const getNotAloneInfo = async(req,res) => {
    const notaloneinfo = await NOTALONE.find({}).exec();
    res.status(200).json(notaloneinfo);
}

const getNews = async(req,res) => {
    const newsinfo = await News.find({}).exec();
    res.status(200).json(newsinfo);
}
const deleteNews = async(req,res) => {
    try {
        await News.deleteOne({_id: req.body.id});
    res.status(200).json({message: "news deleted"});
    } catch (error) {
        res.status(500).json({message: err.message})
    }
} 

const deleteEvent = async(req,res) => {
    try {
        await SchoolEvent.deleteOne({_id: req.body.id})
        res.status(200).json({message: "event deleted"})
    } catch (error) {
        res.status(500).json({message:err.message})
    }
}
const getSchoolEvent = async(req,res) => {
    const schooleventinfo = await SchoolEvent.find({}).exec();
    res.status(200).json(schooleventinfo);
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

const saveNews = async(req,res) => {
    try {
       
        let obj = req.body;
        await News.create({news: obj})
        .then(d => {
            res.status(201).json({message: 'information saved successfully.'})
        })
        .catch(e => new Error(e))
    }catch(err) {
        res.status(500).json({message: err.message})
    }
}

const saveSchoolEvent = async(req,res) => {
    try {
       
        let obj = req.body;
        await SchoolEvent.create({schoolevent: obj})
        .then(d => {
            res.status(201).json({message: 'information saved successfully.'})
        })
        .catch(e => new Error(e))
    }catch(err) {
        res.status(500).json({message: err.message})
    }
}

const saveStaffInfo = async(req,res) => {
    try {
       
        let obj = req.body;
        await Staff.create({staff: obj})
        .then(d => {
            res.status(201).json({message: 'information saved successfully.'})
        })
        .catch(e => new Error(e))
    }catch(err) {
        res.status(500).json({message: err.message})
    }
}

const getStaffInfo = async(req,res) => {
    const staffinfo = await Staff.find({}).exec();
    res.status(200).json(staffinfo);
}
const deleteStaffInfo = async(req,res) => {
    try {
        await Staff.deleteOne({_id: req.body.id})
        res.status(200).json({message: "staff info deleted"})
    } catch (error) {
        res.status(500).json({message:err.message})
    }
}
module.exports = {
    saveNotAlone,
    getNotAloneInfo,
    saveNews,
    getNews,
    saveSchoolEvent,
    getSchoolEvent,
    deleteNews,
    deleteEvent,
    saveStaffInfo,
    getStaffInfo,
    deleteStaffInfo
}