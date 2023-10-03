const mongoose = require('mongoose');
// realmanassingh   FvFQgRFZ5GrZrKH5   203.192.204.112/32
const MONGODB_CONNECT_URI = "mongodb+srv://realmanassingh:FvFQgRFZ5GrZrKH5@cluster0.kotlqml.mongodb.net/?retryWrites=true&w=majority"
//process.env.MONGODB_CONNECT_URI,
//

mongoose.connect("mongodb://0.0.0.0:27017/blog_api", {
    //useCreateIndex: true,
    //useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then( () => {
    console.log("Connection successfull");
}).catch((e) => {
    console.log("No Connection", e);
})