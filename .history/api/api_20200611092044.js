const express = require('express')
const router = express.Router()
const ZKLib = require('../zklib')

let attendances = {"data": ""} ; 
let users = {"data": ""} ; 

router.get('/attendances',(req,res)=> {
     attendancesCall() 
     setTimeout(()=>{
         res.send(attendances.data)
     },6000)
  
}) 

router.get('/users',(req,res)=> {
    usersCall()
    setTimeout(()=>{
        res.send(users.data) 
    },6000) 
    
})


const attendancesCall = async () => {

    let zkInstance = new ZKLib('192.168.1.201', 4370, 10000);
    try {
        
        await zkInstance.createSocket()
        
    } catch (e) {
    }
    attendances = await zkInstance.getAttendances();
    console.log(attendances.data)

}

const usersCall = async () => {

     
    let zkInstance = new ZKLib('192.168.1.201', 4370, 10000);
    try {
        
        await zkInstance.createSocket()
        
    } catch (e) {
    }
     users = await zkInstance.getUsers();
    //console.log(users.data)

}

module.exports = router ; 