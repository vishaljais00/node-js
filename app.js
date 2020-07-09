
const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/programmerDBex'

const app = express();

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const programmersRouter = require('./routes/programmers.js')
app.use('/programmers' , programmersRouter)

app.listen(9000 , () => {

    console.log('server started ...')
}) 