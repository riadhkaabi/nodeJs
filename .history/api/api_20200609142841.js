const express = require('express')
const router = express.Router()
const ZKLib = require('../zklib')

let attendances ; 
let users ; 

router.get('/attendances',(req,res)=> {
    await attendancesCall()
    /*setTimeout(()=>{
        res.send(attendances.data) 
    },3000) */
    res.send(attendances.data) 
    
})

router.get('/users',(req,res)=> {
    usersCall()
    setTimeout(()=>{
        res.send(users.data) 
    },3000) 
    
})


const attendancesCall = async () => {

    let zkInstance = new ZKLib('192.168.1.201', 4370, 10000);
    try {
        
        await zkInstance.createSocket()
        
    } catch (e) {
    }
    attendances = await zkInstance.getAttendances();
    //console.log(attendances.data)

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