const express = require('express')
const e = require('express')()
const app=express()
app.use(express.json)
const PORT = 5000 
const router = express.Router() 
const ZKLib = require('./zklib')

e.get('/all',(req,res)=>{
    return res.json({"message": success}) 
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
app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})

test()