const express = require('express')
const router = express.Router()
const ZKLib = require('../zklib')

let attendances = {"data": ""} ; 
let users = {"data": ""} ; 

router.get('/attendances',(req,res)=> {
     attendancesCall() 
     setTimeout(()=>{
         res.send(attendances.data)
     },8000)
  
}) 

router.get('/users',(req,res)=> {
    async() => { await usersCall() }  
    setTimeout(()=>{
        res.send(users.data)
    },5000)
})


const attendancesCall = async () => {

    let zkInstance = new ZKLib('192.168.1.201', 4370, 10000);
    try {
        
        await zkInstance.createSocket()
        
    } catch (e) {
        console.log('error has occured in socket communication')
    }
    attendances = await zkInstance.getAttendances();
    //console.log(attendances.data)

}

const usersCall = async () => {

     
    let zkInstance = new ZKLib('192.168.1.201', 4370, 10000);
    try {
        
        await zkInstance.createSocket()
        
    } catch (e) {
        console.log('error has occured in socket communication')
    }
     users = await zkInstance.getUsers();
    //console.log(users.data)

}

module.exports = router ; 