const mongoose = require('mongoose');


//create a schema here
const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a product name"]

        },
        price: {
            type: Number,
            required: [true, "Please enter a product price"]
        },
        quantity: {
            type: Number,
            required: true,
        },
        image: {
            type: String,
            required: false,
        },

    },
    {
        timestamps: true
    }
)


const Product = mongoose.model('Product',productSchema)


module.exports = Product;
