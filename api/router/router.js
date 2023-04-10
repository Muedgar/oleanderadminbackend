const router = require("express").Router();

const {signup_post,login_post,getLoggedInUser, logout, changePassword, clearUserTable} = require("../controller/authControllers");
const { getNotAloneInfo, saveNotAlone } = require("../controller/notalone");


const { authorize } = require("../middleware/authorization");


router.get("/notaloneinfo",getNotAloneInfo)
router.post("/savenotaloneinfo", authorize, saveNotAlone)

router.get("/", (req,res) => {
    res.status(200).json({
        status: "server is running and ready to receive requests ..."
    })
})

router.post('/signup', signup_post);
router.post('/login', login_post);
router.get('/getLoggedIn', getLoggedInUser);
router.get('/logout',logout)
router.post('/changePassword',authorize,changePassword)


module.exports = router;