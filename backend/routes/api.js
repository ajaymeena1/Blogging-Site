const express = require("express");

const router = express.Router();

const Blog = require('../models/blogdb');


router.get("/fetch", async (req, res) => {
    try {
        let data = await Blog.find({});
        // console.log(data)
        res.status(200).json(data)   
    } catch(error){
        // console.log(error)

        res.status(500).json(error)

    }
})

router.get("/post/:id", async (req, res) => {
    try {
        let data = await Blog.findById(req.params.id);
        // console.log(data)
        res.status(200).json(data)   
    } catch(error){
        // console.log(error)

        res.status(500).json(error)

    }
})

router.post("/update/:id", async (req, res) => {
    try {
        await Blog.findByIdAndUpdate(req.params.id, {$set: req.body});
        // console.log(data)
        res.status(200).res("Updated successfully")   
    } catch(error){
        // console.log(error)

        res.status(500).json(error)

    }
})

router.post("/create", (req, res) => {
    const data = req.body
    // console.log("data",data);
    Blog.create(data).then(success => {
        console.log("data",data);

        res.status(201).json({
            message: "Inserted Successfully",
            results: success
        });
    })
        .catch(err => {
            res.json(err);
        });
    })
module.exports = router;
