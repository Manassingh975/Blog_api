const express = require('express'); 
require("../src/db/conn");
const MensRanking = require("../src/models/mens");

const app = express()
const port = process.env.PORT || 3000

// app.use(express.json)

app.get('/api/posts/', async(req, res) => {
    res.send("Retrive a list of all blog post")
})

app.get('/api/posts/:id', async(req, res) => {
    res.send("Retrive a specific blog post by its id")
})

// app.post('/api/posts/', async(req, res) => {
//     // "create a new blog post containing title,content and category id "
//     try{
//         const addingRecord = new MensRanking(req.body)
//         console.log(req.body)
//         const addingRes = addingRecord.save();
//         res.send(addingRes)
//     }catch(e){
//         res.status(400).send(e)
//     }
// })

// app.put('/api/posts/:id', async(req, res) => {
//     res.send("update an existing blog post by its Id.The request body contain title and content")
// })

// app.delete('/api/posts/:id', async(req, res) => {
//     res.send("delete a blog post by its id")
// })


app.get('/api/posts/latest/', async(req, res) => {
    res.send("Retrive the latest blog post from each unique category")
})

app.listen(port, () => {
    console.log(`connection is live at port no. ${port}`);
})