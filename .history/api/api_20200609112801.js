const express = require('express')
const router = express.Router()
const ZKLib = require('../zklib')

let i ; 

router.get('/',(req,res)=> {
    test()
    console.log('hi') ; 
    setInterval(()=>{
        console.log(i)
        res.send(i)
    },6000)   
    
})

const test = async () => {

     
    let zkInstance = new ZKLib('192.168.1.201', 4370, 10000);
    try {
        
        await zkInstance.createSocket()
        console.log(await zkInstance.getInfo())
    } catch (e) {
    }

    i = await zkInstance.getAttendances();
    //console.log(attendences.data);

    const users = await zkInstance.getUsers();
    //console.log(users.data)

}

module.exports = router ; 