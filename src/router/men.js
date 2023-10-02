const express = require("express");

const router = new express.Router();
const BlogApi = require("../models/mens");


router.get('/api/posts/', async(req, res) => {
    //res.send("Retrive a list of all blog post")
    try{
        const genMens = await BlogApi.find({})
        res.send(genMens)
    }catch(e){
        res.status(400).send(e)
    }
})

router.get('/api/posts/:id', async(req, res) => {
    //res.send("Retrive a specific blog post by its id")
    try{
        const _id = req.params.id;
        const getMen  = await  BlogApi.findById(_id);
        res.send(getMen)
    }catch(e){
        res.status(400).send(e)
    }
})

router.post('/api/posts/', async(req, res) => {
    
    try{

        const addingRecord = new BlogApi(req.body)
        console.log(req.body)
        const addingRes = addingRecord.save();
        res.status(201).send(addingRes)
    }catch(e){
        console.log(e)
        res.status(400).send(e)
    }
})

router.patch('/api/posts/:id', async(req, res) => {
    //res.send("update an existing blog post by its Id.The request body contain title and content")
    try{
        const _id = req.params.id;
        const getMen  = await  BlogApi.findByIdAndUpdate(_id,req.body,{new:true});
        res.send(getMen)
    }catch(e){
        res.status(500).send(e)
    }
})

router.delete('/api/posts/:id', async(req, res) => {
    
    try{
        const _id = req.params.id;
        const getMen  = await  BlogApi.findByIdAndDelete(_id);
        res.send(getMen)
    }catch(e){
        res.status(400).send(e)
    }
})


router.get('/api/posts/latest/', async(req, res) => {
    try{
        const genMens = await BlogApi.find()
        res.send(genMens)
    }catch(e){
        res.status(400).send(e)
    }
})

module.exports = router