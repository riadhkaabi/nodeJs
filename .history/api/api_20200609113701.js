const express = require('express')
const router = express.Router()
const ZKLib = require('../zklib')

let attendances ; 
let users ; 
router.get('/',(req,res)=> {
    attendancesCall()
    console.log('hi') ; 
    setInterval(()=>{
        console.log(attendances.data)
        res.send(attendances.data)
    },6000)   
    
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

    const users = await zkInstance.getUsers();
    //console.log(users.data)

}

module.exports = router ; 