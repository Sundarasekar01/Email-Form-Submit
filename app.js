const express = require('express')
const app = express()


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


app.listen(4000)