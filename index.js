const express = require('express')
const app = express()
const mongoose = require('mongoose')

app.use(express.json())

mongoose.connect('mongodb+srv://admin:admin@cluster0.ou6qi8u.mongodb.net/?retryWrites=true&w=majority', err => {
    if (err) return console.log(err)

    console.log('DB Connected')
})

const commentRoutes = require('./routes/comment')

app.use('/comment', commentRoutes)

app.listen(process.env.PORT || 5000)