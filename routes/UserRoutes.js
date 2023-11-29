const express = require('express');
const User = require('../models/UserModel');
const { getUsers, createUser, getUserById, updateUserById, deleteUserById } = require('../controllers/UserController');
const router = express.Router();

router.use(express.json());

router.use(express.urlencoded({extended:false}))





//add user to database
router.post('/register',createUser)





///USERS START HERE


//get all users
router.get('/allusers', getUsers)

//get user by id
router.get('/users/:id',getUserById)


//update user by id
router.put('/updateuser/:id', updateUserById)

//delete user by id
router.delete('/deleteuser/:id', deleteUserById)


module.exports = router;