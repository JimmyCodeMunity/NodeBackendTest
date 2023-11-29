require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/ProductModel')
const User = require('./models/UserModel')
const productRoute = require('./routes/ProductRoute')
const userRoute = require('./routes/UserRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');

const cors = require('cors');


const app = express()


app.use(cors())


//allow json requests to be sent to the server
app.use(express.json())

//allow url encoded for from input
app.use(express.urlencoded({extended:false}))


app.use('/api/product', productRoute)
app.use('/api/user', userRoute)

mongoose.set("strictQuery",false)

// const MONGO_URL = process.env.MONGO_URL;
//const PORT = process.env.PORT;
const MONGO_URL = 'mongodb+srv://DevJimin:Ghostbmer02@devtest.it7uhb2.mongodb.net/?retryWrites=true&w=majority'
const PORT = 3000

//connect to mongo database
const Connect = () =>{
    try {
        const conn = mongoose.connect(MONGO_URL);
        if(conn){
            console.log("Connection to MongoDB is Successful");
            app.listen(PORT,()=>{
                console.log(`Node Server running on port ${PORT}`);
            })
        }
    } catch (error) {
        console.log(error)
        
    }
}
Connect()


// mongoose.connect(MONGO_URL)
// .then(()=>{
//     console.log("DB connection successful")
//     console.log(`Node is running on port ${PORT}`)
// })
// .catch(error=>{
//     console.log(error)
// })

// app.get('/',(req,res)=>{
//     throw new Error('Fake error')
//     //res.send("Welcome to my Node Mongo Test")
// })


//app.use(errorMiddleware)


