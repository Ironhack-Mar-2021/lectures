const mongoose = require('mongoose')
const Blog = require('./models/Blog.js')
const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json());
app.use(cors())


mongoose
    .connect(`mongodb+srv://niko:nikoniko@cluster0.k13bi.mongodb.net/mongooseVsCobra?retryWrites=true&w=majority`, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch(err => console.error('Error connecting to mongo', err));




app.post('/saveMessage', (req, res) => {    //http://localhost:5000/saveMessage
    console.log("The message is", req.body)

    Blog.create({ message: req.body.message }).then(newBlog => res.json(newBlog))
})


app.get('/getMessages', (req, res) => {
    Blog.find().then(allOurBlogsFromTheDB => res.json(allOurBlogsFromTheDB))
})








// app.post('/saveMessagewithParams/:message', (req, res) => {    //http://localhost:5000/saveMessage
//     console.log("The message with params and query", req.params, req.query)
//     //Blog.create()
// })

app.listen(5000)