const express = require('express')
const app = express()
require('dotenv').config()

const jwt = require('jsonwebtoken')
const { env } = require('process')



const details =[
    
    {
    name: 'sundara',
    age:22,
    place:'Pothencode'
},
{
    name: 'sundara',
    age:22,
    place:'Attingal'
},
{
    name: 'karthik',
    age:21,
    place:'Attingal'
}

]


app.get('/details', (req,res) =>{
    res.json(details)
})


app.listen(4000)