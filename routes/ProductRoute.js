const express = require('express');
const Product = require('../models/ProductModel');
const { getProducts, getProductByProductId,updateProductById, addnewProduct, deleteProductById } = require('../controllers/ProductController');


const router = express.Router();
router.use(express.json())

//allow url encoded for from input
router.use(express.urlencoded({extended:false}))

//testing product add
router.post('/productadd',(req,res)=>{
    //thos conlog just display the data that is being send
    console.log(req.body)
    //res.send sends the data to the route
    res.send(req.body)
})

//add product
router.post('/productnew',addnewProduct)

//get products
router.get('/allproducts', getProducts )

//get product by id
router.get('/productsbyid/:id', getProductByProductId)


//update product
router.put('/updateproduct/:id', updateProductById)


//delete a product

router.delete('/deleteproduct/:id', deleteProductById)

module.exports = router;