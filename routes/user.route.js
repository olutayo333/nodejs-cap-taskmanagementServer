const express =require("express")
const router =  express.Router()
const {submittask, dashboard, deletetask, edittask}= require("../controllers/user.controllers")

router.post("/submittask", submittask)
router.get("/dashboard", dashboard )
router.post("/delete", deletetask)
router.post("/edit", edittask)
module.exports = router