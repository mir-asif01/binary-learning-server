const express = require('express')
const app = express()
const port = 8000
const cors = require('cors')
app.use(cors())

const topics = require('./data/topics.json')

app.get('/topics',(req,res)=>{
    res.send(topics)
})

app.get('/topics/:id',(req,res)=>{
    const id = req.params.id;
    const SingleTopic = topics.find(tp=> tp.id === id);
    res.send(SingleTopic)
})

app.listen(port,()=>{
    console.log(`this app is running on ${port} `)
})