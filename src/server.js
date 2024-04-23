const express = require('express'); 
const cors = require('cors'); 
const helmet = require('helmet'); 
const server = express(); 
const db = require('./database/dbConfig.js'); 
const bcrypt = require('bcryptjs'); 
const dotenv = require('dotenv'); 
const jwt = require('jsonwebtoken'); 

//set up Global configuration access
dotenv.config();

//middleware
server.use(cors()); 
server.use(helmet()); 
server.use(express.json()); 

//endpoints
//Get all users
server.get('/users/internal' , async (req , res) => {
    try {
        const users =  await db('users'); 
        res.json(users); 
    } catch (err) {
        console.log(err);
    }
}); 
//SIGN UP 
server.post('/users/signup' , async (req , res) => {
    const { email , phoneNumber, password } = req.body; 

    try {
        //Hashing the password 
        const hashedPassword = await bcrypt.hash(password , 10) ;
        //Store the user's infos in the database (with the hashed password)
      await db('users').insert({email, phoneNumber , password : hashedPassword}); 
        res.status(201).json({message : 'User successfully stored'}); 
    } catch (err) {
        console.log(err);
    }
}); 
//LOG IN
server.post('/users/login' , async (req ,res) => {
    const islog = false ; 
    const {email , password} = req.body; 

    try {
        //check if user exists 
        const user = await db('users').where('email' , email).first(); 
        if (!user) {
            return res.status(404).json({error : 'User Not Found'}); 
        }
        //check password 
        const passwordMatch = await bcrypt.compare(password , user.password); 
        if (!passwordMatch) {
            return res.status(401).json({error : 'Incorrect Password'}); 
        }

        //Generate JWT token 
        const token = jwt.sign(
            {userId: user.id, email: user.email }, 
            process.env.JWT_SECRET_KEY
        ); 

        //Success
        islog = true ;  
        res.json({message : 'Login successful' , user}); 
    } catch (err) {
        console.log(err);
        res.status(500).json({error : 'Internal Server Error'}); 
    }
})


//Get devices by user ID

server.get('/users/devices/:id' , async (req , res) => {
    const userId = req.params.id ; 

    try {
        //check if the user exists 
        const user = await db('users').where('id' , userId).first(); 
        if (!user) {
            return res.status(404).json({error : 'User not found '}); 
        }
        //Fetch devices for the specified user 
        const devices = await db('devices').where('userId' , userId).select('*'); 
        res.json(devices); 
    } catch (err) {
        console.log(err);
        res.status(500).json({error : 'Internal Server Error'}); 
    }
}); 





//Get all devices
server.get('/devices' , async (req , res) => {

    try {
        const devices = await db('devices'); 
        res.json(devices); 
    } catch (err) {
        console.log(err);
    }
}); 


//Add a device 
server.post('/devices/add' , async (req , res) => {
    const { deviceName , state , userId } = req.body ; 
    const isGuest = false ; 
    const guestId = null ; 
    try {
        await db('devices').insert({deviceName , state , userId , guestId , isGuest}); 
        res.status(201).json({message : 'Device Successfully stored'}); 
    } catch (err) {
        console.log(err);
    }
}); 

//update a device by ID 
server.put('/devices/update/:id' , async (req , res) => {
    const {state} = req.body ; 
    const deviceId = req.params.id ; 

    try {
        //check if the device exists
        const device = await db('devices').where('id' , deviceId).first(); 
        if (!device) {
            return res.status(404).json({error : 'Device Not Found'}); 
        }
        //Update the device's state
        await db('devices').where('id' , deviceId).update({state}); 

        //Fetch the updated device
        const updatedDevice = await db('devices').where('id' , deviceId).first(); 
        res.json({message : 'Device updated successfully ', device: updatedDevice}); 
    } catch (err) {
        console.log(err);
        res.status(500).json({error : 'Internal Server Error'}); 
    }
}); 

//Get a device by ID 
server.get('/devices/:id', async (req , res) => {
    const deviceId = req.params.id ; 
    try {
        const device  = await db('devices').where('id' , deviceId).first(); 
        //check if the device exists
        if (!device) {
            return res.status(404).json({message : 'Device Not Found'}); 
        }
        //return the device 
        return res.status(200).json({device}); 

    } catch (err) {
        console.log(err);
        res.status(500).json({error : 'Internal Server Error'}); 
    }
}); 

//Remove a device by it's ID 
server.delete('/devices/:id' , async (req , res) => {
    const deviceId = req.params.id ; 

    try {
        const device = await db('devices').where('id', deviceId).first(); 
        //check if the device exists
        if (!device) {
            return res.status(404).json({message : 'Device Not Found'}); 
        }
        //Delete the device
        await db('devices').where('id' , deviceId).del(); 

        res.json({message : 'Device Deleted successfully'}); 

    } catch (err) {
        console.log(err);
        return res.status(500).json({error : 'Internal Server Error'}); 
    }
})
//get guests 
server.get('/guests' , async (req , res) => {

    try {
        const guests = await db('guests'); 
        res.json(guests); 
    } catch (err) {
        console.log(err);
    }
});
//Add a device in guest mode 
server.post('/guests/devices/add' , async (req , res) => {
    const { deviceName , state , guestId } = req.body ; 
    const isGuest = true ; 
    const userId = null ; 
    try {
        await db('devices').insert({deviceName , state , userId ,  guestId , isGuest}); 
        res.status(201).json({message : 'Device Successfully stored'}); 
    } catch (err) {
        console.log(err);
    }
}); 

//Get devices by guest ID
server.get('/guests/devices/:id' , async (req , res) => {
    const guestId = req.params.id ; 

    try {
        //check if the user exists 
        const guest = await db('guests').where('id' , guestId).first(); 
        if (!guest) {
            return res.status(404).json({error : 'Not found '}); 
        }
        //Fetch devices for the specified guest
        const devices = await db('devices').where('guestId' , guestId).select('*'); 
        res.json(devices); 
    } catch (err) {
        console.log(err);
        res.status(500).json({error : 'Internal Server Error'}); 
    }
});

//remove everything ; 
server.delete('/user/:id' , async(req , res) => {
    const userId = req.params.id ; 

    try {
     //Delete devices associated with the user 
        await db('devices').where('userId' , userId).del(); 
        await db('devices').where('guestId' , userId).del(); 
    
     //Delete the user : 
        await db('users').where('id' , userId).del(); 

        res.json({message : 'User account and associated data deleted successfully'}); 
    } catch (err) {
        console.log(err);
        res.status(500).json({error : 'Internal Server Error'}); 
    }
}); 

module.exports = server ; 