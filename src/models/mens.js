const express = require("express");
const { default: mongoose } = require("mongoose");

const menSchema = new mongoose.Schema({
    id: {
        type: Number,
        required:true,
        unique :true
    },
    title: {
        type: String,
        required:true,
        unique :true
    },
    Context: {
        type: String,
        required:true 
    },
    Created_at: {
        type: String,
        
    },
    Updated_at: {
        type: String,
        
        
    },
    Catgory_id: {
        type: String,
        required:true,
        unique:true
        
    },
})
const BlogApi = new mongoose.model("BlogApi",menSchema)
module.exports = BlogApi;