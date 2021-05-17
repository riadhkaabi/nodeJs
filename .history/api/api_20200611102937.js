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
    async () => {

     
        let zkInstance = new ZKLib('192.168.1.201', 4370, 10000);
        try {
            
            await zkInstance.createSocket();
            users = await zkInstance.getUsers();

            setTimeout(()=> {
                res.send(users.data) ;
            },6000) 
        
            
        } catch (e) {
            console.log('error has occured in socket communication')
        }
        
    }
    
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

     
    let zkInstance = new ZKLib('192.168.1.201', 4370, 15000);
    try {
        
        await zkInstance.createSocket();
        users = await zkInstance.getUsers();
    
        
    } catch (e) {
        console.log('error has occured in socket communication')
    }
     //users = await zkInstance.getUsers();
    //console.log(users.data)

}

module.exports = router ; 