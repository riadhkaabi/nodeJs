Device-NodeJs
This project is made to create apis managing data inside the device to run this project you have to :

    1-Connect the device to your switcher with an RJ45 connector (ethernet cable)
    2-Download the project
    3-Open a terminal inside the project and run the followin command : 
    nodemon test.js

This project will manage different apis to control data in the device (get attendance from device , get users from device , delete attendance from device..) . 
The backend (made with spring boot) will revieve different apis from this project , and will use the to make specific apis for the frontend