import express from 'express';
import asyncHandler from 'express-async-handler';
import data from '../../src/data.js';
import Product from '../models/productModel.js';
import upload, { isAdmin, isAuth } from '../utils.js';
import mongoose from 'mongoose';
import path from 'path';


const productRouter = express.Router();

productRouter.get(
    '/',
    asyncHandler(async (req, res) => {
        const name = req.query.name || '';
        const nameFilter = name ? { name: { $regex: name, $options: 'i'} } : {};
        const products = await Product.find({...nameFilter}).populate('Image');
        console.log('this is found products: ',products)
        res.send(products);
    })
);

productRouter.get(
    '/seed',
    asyncHandler(async (req, res) => {
        // await Product.remove({});
        const createdProducts = await Product.insertMany(data.products);
        res.send({ createdProducts });
    })
);

productRouter.get(
    '/:id',
    asyncHandler(async (req, res) => {
        const product = await Product.findById(req.params.id);
        if (product) {
            res.send(product);
        } else {
            res.status(404).send({ message: 'Product Not Found' });
        }
    })
);


productRouter.delete(
    '/:id',
    isAuth,
    isAdmin,
    asyncHandler(async (req, res) => {
        console.log('req.params.id: ',req.params.id)
        const product = await Product.findById(req.params.id);
        console.log('found product to delete: ',product)
        if (product) {
            const deleteProduct = await product.remove();
            res.send({ message: 'Product Deleted', product: deleteProduct });
        } else {
            res.status(404).send({ message: 'Product Not Found' });
        }
    })
);


productRouter.post(
    '/',
    isAuth,
    isAdmin,
    asyncHandler(async (req, res) => {
        console.log('here')
        const product = new Product({
            name: 'sample name ',
            image: ['/images/p1.jpg'],
            brand: 'sample brand',
            category: 'sample category',
            description: 'sample description',
            price: 100,
            countInStock: 10,
            rating: 0,
            numReviews: 0,
            _id: mongoose.Types.ObjectId()
        });


        console.log('this is new product: ', product)
        const createdProduct = await product.save();
        console.log('this is createdProduct: ', createdProduct)
        res.send({ message: 'Product Created', product: createdProduct });
    })
);

productRouter.put(
    '/:id',
    isAuth,
    isAdmin,
    asyncHandler(async (req, res) => {
        console.log('------------req.params.id: ', req.params.id)
        const productId = req.params.id;
        const product = await Product.findById(productId);
        console.log('product in put: ', product)
        console.log('req.body.product.image in put: ',req.body.product.image.data)
        console.log('req.body.product.image in put typeof: ',typeof(req.body.product.image.data))
        console.log('req.body.product.image in put length: ',req.body.product.image.data.length)


        if (product) {
            product.name = req.body.product.name;
            product.price = req.body.product.price;
            product.image = req.body.product.image;
            product.category = req.body.product.category;
            product.brand = req.body.product.brand;
            product.countInStock = req.body.product.countInStock;
            product.description = req.body.product.description;
            console.log('updated product in put: ', product)
            let updatedProduct
            console.log('testing 1')

            try {
                console.log('testing 2')
                updatedProduct = await product.save();
                console.log('testing 3')
            } catch (error) {
                console.log('testing 4')
                console.error('error in catch', error);
            }
            console.log('testing 5')

            console.log('this is  new updatedProduct: ', updatedProduct)

            console.log('testing 1')
            res.status(200).send({ message: 'Product Updated', product: updatedProduct });
        } else {
            console.log('am I here')
            res.status(404).send({ message: 'Product Not Found' });
        }
    })
);

export default productRouter;




