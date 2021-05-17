const express = require('express')
const router = express.Router()



router.get('/',(req,res)=> {
    console.log('hi') ; 
    res.send("hello") ; 
})





const test = async () => {

     
    let zkInstance = new ZKLib('192.168.1.201', 4370, 10000);
    try {
        // Create socket to machine 
        await zkInstance.createSocket()


        // Get general info like logCapacity, user counts, logs count
        // It's really useful to check the status of device 
        console.log(await zkInstance.getInfo())
    } catch (e) {
    }

    // Disconnect the machine ( don't do this when you need realtime update :))) 
    // const users = await zkInstance.getUsers();
    // console.log(users.data.length);
    
    const attendences = await zkInstance.getAttendances();
    console.log(attendences.data);

    const users = await zkInstance.getUsers();
    console.log(users.data)

}

module.exports = router ; 