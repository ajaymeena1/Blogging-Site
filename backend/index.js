const express = require("express");
// import cors from 'cors';
const cors = require("cors")
const mongoose = require("mongoose");

const routes = require('./routes/api');


const app = express();
app.use(cors())

// app.get("/aj", (req, res) => {
//     res.send({
//         name: "ajay"
//     })
// })
mongoose.connect('mongodb://localhost/blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false
});
// mongoose.Promise = global.Promise;

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


// app.use(function(err,req,res,next){
//     res.status(422).send({error:err.message})
// })


app.use('/api', require('./routes/api'));

app.listen(process.env.port || 8003, () => {
    console.log("server start addjef")
})
