const express = require('express')
const app = express()
require('dotenv').config()

const jwt = require('jsonwebtoken')
const { env } = require('process')



const details =[
    
    {
    name: 'sundara',
    age:22,
    place:'pothencode'
},
{
    name: 'karthik',
    age:21,
    place:'attingal'
}

]


app.get('/details', (req,res) =>{

    res.json(details)
})


// authenticate user
app.post('/login',(req,res) =>{
    
const username = 'sundara'
const user = {name:username}

const accessToken = jwt.sign(user,process.env.ACCESS_TOKEN)

res.json({accessToken: accessToken})

})


app.listen(4000)