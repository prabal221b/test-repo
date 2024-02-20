const express = require('express')
const app = express()



const user = [{
    name: "John",
    kidneys: [{
        healthy: false
    }]
}];

app.use(express.json())

app.get('/', function(req,res){
    const johnkidneys = user[0].kidneys
    const numberofkidneys = johnkidneys.length
    let healthykidneys= 0
    for(let i =0; i <johnkidneys.length; i++){
        if (johnkidneys[i].healthy){
            healthykidneys = healthykidneys + 1
        }
    }
    const unhealthykidneys = numberofkidneys - healthykidneys
    res.json({
        numberofkidneys,
        healthykidneys,
        unhealthykidneys
    })
})


app.post('/',function(req,res){
    const isHealthy = req.body.isHealthy
    user[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

app.put('/', function(req,res){
    if (anyUnhealthyKidney()){
        for (let i =0; i< user[0].kidneys.length;i++){
            user[0].kidneys[i].healthy = true;
        }
        res.json({})
    }

    else{
        res.status(411).json({msg: "You have no bad kidneys"})
        
    }
})

app.delete('/', function(req,res){
    if (anyUnhealthyKidney()){
        const newKidneys = []
        for(i=0; i < user[0].kidneys.length;i++){
            if(user[0].kidneys[i].healthy){
                newKidneys.push({
                    healthy: true
                })
            }
        }
        user[0].kidneys = newKidneys
        res.json({
        msg: "Done!"
        })
    }
    else{
        res.status(411).json({msg: "You have no bad kidneys"})
        
    }
})

function anyUnhealthyKidney(){
    let atleastOneUnhealthyKidney = false;
    for(let i =0; i<user[0].kidneys.length;i++){
        if(!user[0].kidneys[i].healthy){
            atleastOneUnhealthyKidney = true;
        }
    }
    return atleastOneUnhealthyKidney
}
app.listen(2000)