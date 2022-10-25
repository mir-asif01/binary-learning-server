const express = require('express')
const app = express()
const port = 8000
const cors = require('cors')
app.use(cors())

const topics = require('./data/topics.json');
const checkout = require('./data/checkout.json')

app.get('/topics',(req,res)=>{
    res.send(topics)
})

app.get('/topics/:id',(req,res)=>{
    const id = req.params.id;
    console.log(id)
    const SingleTopic = topics.find(tp=> tp.id === id);
    res.send(SingleTopic)
})

// app.get('/checkout/:id',(req,res)=>{
//     let id = req.params.id
//     let chj = checkout.find(ck => ck.id === id)
//     res.send(chj)
// })

app.get('/checkout/:id',(req,res)=>{
    const id = req.params.id;
    console.log(id)
    const SingleCheckout = checkout.find(ck => ck.id === id);
    res.send(SingleCheckout)
    
})

app.listen(port,()=>{
    console.log(`this app is running on ${port} `)
})