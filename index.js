require("dotenv").config()
const express = require('express');
const app = express();
app.use(express.json());
const connection = require('./connection');
connection()
const inventoryModel = require('./inventory');

app.post('/api/inventory', async(req,res)=>{
    let upcomingData = req.body
    let response = []
    for(let i=0; i<upcomingData.length; i++) {
        if(upcomingData[i].operation =="add"){
         let data = await inventoryModel.findOne({ productId: upcomingData[i].productId})
         data.quantity = data.quantity + upcomingData[i].quantity
         response.push(data)
         await data.save()
        }
       if(upcomingData[i].operation =="subtract"){
        let data = await inventoryModel.findOne({ productId: upcomingData[i].productId})
        data.quantity = data.quantity - upcomingData[i].quantity
        response.push(data)
        await data.save()
       }
    }
    res.send({data :response})
})


app.listen(8080, ()=>{
    console.log('listening on 8080');
});