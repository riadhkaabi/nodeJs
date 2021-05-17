const express = require('express')
const router = express.Router()
const ZKLib = require('../zklib')
const moment = require('moment')

let attendances = {"data": ""} ; 
let users = {"data": ""} ; 

router.get('/attendances',async (req,res)=> {
     await attendancesCall() 

    console.log(moment(new Date()).subtract(1,"h"))
    //console.log(moment.utc(new Date()).local(false))
    console.log(attendances.data)
    //console.log()
     res.send(attendances.data)
})  

router.get('/users',async (req,res)=> {
    await usersCall() 
    res.send(users.data) 
    

})

router.get('/attendances/delete',async(req,res)=> {
        let zkInstance= new ZKLib('192.168.1.201',4370,10000) ; 
        try {
            await zkInstance.createSocket() ; 
            
        }
        catch(e) {
            console.log('error has occured in socket communication') 
        }
        await zkInstance.clearAttendanceLog() ; 
        res.send('attendances deleted successfully') ; 
          
})     

router.get('/logs',(req,res)=> {
    setInterval(async()=>{
        let zkInstance=new ZKLib('192.168.1.201',4370,10000) ; 
        try {
            await zkInstance.createSocket()
        }
        catch(e) {
            console.log('error occured in socket communication')
        }
         //logs = await zkInstance.getRealTimeLogs()
         
         console.log(logs) ; 
         res.send(logs)  
    },3000)
    
}) 

const attendancesCall = async () => {

    let zkInstance = new ZKLib('192.168.1.201', 4370, 10000);
    try {
        
        await zkInstance.createSocket() ; 
        attendances = await zkInstance.getAttendances();
        
    } catch (e) {
        console.log('error has occured in socket communication')
    }  

}
const usersCall = async () => {
    let zkInstance = new ZKLib('192.168.1.201', 4370, 10000);
    try {
        await zkInstance.createSocket();
        users = await zkInstance.getUsers();
    } catch (e) {
        console.log('error has occured in socket communication')
    }
}
module.exports = router ; 