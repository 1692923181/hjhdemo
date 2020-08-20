const express = require("express")
const router = express.Router();

router.get("/creat",(req,res)=>{
    res.render("files/create")
})

module.exports = router;