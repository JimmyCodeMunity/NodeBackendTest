const Product = require("../models/ProductModel");

const express = require("express");
//allow json requests to be sent to the server


const getProducts = async (req, res) => {
    try {
        const product = await Product.find(req.body);
        res.status(200).json(product)
        console.log("Products fetched successfully")
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message})
        
    }
}

//fetch product by id
const getProductByProductId = async(req,res)=>{
    try {
        const products = await Product.findById(req.params.id);
        res.status(200).json(products)
        console.log('product with id:',req.params.id, "found successfully");
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message})
        
    }
}

//update product by id
const updateProductById = async(req,res)=>{
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id,req.body);
        if(!product){
            return res.status(404).json({message: 'Product not found'})
        }
        else{
            const updatedProduct = await Product.findById(id);
            
            res.status(200).json(updatedProduct);
            console.log("product updated successfully")
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message})
        
    }
}


const addnewProduct = async(req,res)=>{
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product)
        console.log("Product added successfully")
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message})
        
    }
}



const deleteProductById = async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id, req.body);
        if(!product){
            res.status(404).json({message: 'Product not found'})
        }
        else{
            console.log("Product deleted successfully")
            res.status(200).json(product)
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message})
        
    }
}
module.exports = {
    getProducts,
    getProductByProductId,
    updateProductById,
    addnewProduct,
    deleteProductById
}
