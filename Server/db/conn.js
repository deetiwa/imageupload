const mongoose =require('mongoose');

const DB = "mongodb+srv://deepaktiwari412:deepaktiwari@cluster0.pbw3mxu.mongodb.net/imageupload?retryWrites=true&w=majority"


mongoose.connect(DB).then((result) => {
    console.log("Database Connected");
}).catch((err) => {
    console.log("Connection Failed");
})
