const express = require('express')
const router = express.Router()
const ZKLib = require('../zklib')

let attendances = {"data": ""} ; 
let users = {"data": ""} ; 

router.get('/attendances',async (req,res)=> {
     await attendancesCall() 
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
        res.send({'message': 'attendances deleted successfully'}) ;
          
})    

router.get('/logs',async(req,res)=> {
    let zkInstance=new ZKLib('192.168.1.201',4370,10000) ; 
    try {
        await zkInstance.createSocket
    }
    catch(e) {
        console.log('error occured in socket communication')
    }
})




const attendancesCall = async () => {

    let zkInstance = new ZKLib('192.168.1.201', 4370, 10000);
    try {
        
        await zkInstance.createSocket() ; 
        attendances = await zkInstance.getAttendances();
        //console.log(attendances.data)
        
    } catch (e) {
        console.log('error has occured in socket communication')
    }
    

}

const usersCall = async () => {

     
    let zkInstance = new ZKLib('192.168.1.201', 4370, 10000);
    try {
        
        await zkInstance.createSocket();
        users = await zkInstance.getUsers();
        //console.log(users.data)
    
        
    } catch (e) {
        console.log('error has occured in socket communication')
    }
     
    

}

module.exports = router ; 