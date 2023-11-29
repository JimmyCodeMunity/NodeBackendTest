const express = require('express');
const User = require('../models/UserModel');

const getUsers = async (req, res) => {
    try {
        const user = await User.find(req.body);
        res.status(200).json(user);
        console.log("all users festched successfully")
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message})
        
    }
}


const createUser = async(req,res)=>{
    try {
        const user = await User.create(req.body);
        res.status(200).json(user);
        console.log("User account created successfully");
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message: error.message})
        
    }
}

const getUserById = async(req,res)=>{
    try {
        const user = await User.findById(req.params.id);
        console.log("user id:", req.params.id, "found");
        res.status(200).json(user)
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message})
        
    }
}


const updateUserById = async (req, res)=>{
    try {
        const {id} = req.params;
        const user = await User.findByIdAndUpdate(id, req.body);
        if(!user){
            res.status(404).json({message:'User with that id not found'});

        }else{
            const updatedUser = await User.findById(id);
            res.status(200).json(updatedUser)
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message})
        
    }
}


const deleteUserById = async(req,res)=>{
    try {
        const {id} = req.params;
        const user = await User.findByIdAndDelete(id,req.body);
        if(!user){
            console.log("failed deleting user")
        }else{
            console.log("User account deleted successfully")
            res.status(200).json(user);
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message});
        
    }
}


module.exports = {
    getUsers,
    createUser,
    getUserById,
    updateUserById,
    deleteUserById
}