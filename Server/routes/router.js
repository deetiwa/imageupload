const express = require ("express");
const router = new express.Router();
const multer = require("multer");
const users = require("../model/userScema")
const moment = require("moment")

const imgconfig = multer.diskStorage({
    destination:(req,file,callback) => {
        callback(null, "./upload")
    },
    filename:(res,file,callback)=>{
        callback(null, `image-$(Date.now()}. ${file.originalname})`)
    }
})

const isImage = (req,file,callback)=> {
    if(file.mimetype.startswith("image"))
    {
        callback(null, true)
    }
    else{
        callback(new Error("only image is allowd"))
    }
}

router.post('/register', upload.single("photo"),async (req , res) => {
           const {filename} = req.file;
           const{fname} = req.body;
           if(!fname == !filename)
           {
            res.status(401).json({status:401,message:"fill all the data"})
           }
           try {
            const date =moment (new Date()).formate("YYYY-MM-DD");
              const userdata = new users({
                fname:fname,
                imgpath:filename,
                date:date,
              });
              const finaldata = await userdata.save();
              res.status(201).json({status:201, finaldata})
           } catch (error) {
            console.log(error);
           }
})

const upload = multer ({storage:imgconfig, fileFilter:isImage});

module.exports = router;