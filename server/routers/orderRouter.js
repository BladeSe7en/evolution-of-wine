import express from 'express';
import asyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';
import { isAuth } from '../utils.js';

const orderRouter = express.Router();

orderRouter.post(
    '/',
    isAuth,
    asyncHandler(async (req, res, next) => {
        // console.log('this is req.body:',req.body)
        // console.log('this is req.headers: ',req.headers)
        // console.log('what is req.body.order.length: ',req.body)
        // console.log('inside orderRouter-- req.body.paymentMethod: ',req.body.order.paymentMethod)
        // console.log('inside orderRouter-- req.body.cartItems: ',req.body.order.cartItems)
        // console.log('inside orderRouter-- req.body.shippingAddress: ',req.body.order.shippingAddress)

        // console.log('inside orderRouter-- req.body.user: ',req.body.order.user)

        // console.log('inside orderRouter-- req.body.itemsPrice: ',req.body.order.itemsPrice)
        // console.log('inside orderRouter-- req.body.shippingPrice: ',req.body.order.shippingPrice)
        // console.log('inside orderRouter-- req.body.taxPrice: ',req.body.order.taxPrice)
        // console.log('inside orderRouter-- req.body.totalPrice: ',req.body.order.totalPrice)
        // console.log('req.body.order.user_id:', req.body.order.user._id)
        // console.log('am I even getting here')
        if (req.body.order.cartItems.length === 0) {
            res.status(400).send({ message: 'Cart is empty' });
        } else {
            let cartItems = req.body.order.cartItems.map(({_id, ...keepAttrs}) => keepAttrs)

            const order = new Order({
                cartItems: cartItems,

                shippingAddress:{
                    fullName:   req.body.order.shippingAddress.fullName,
                    address:    req.body.order.shippingAddress.address,
                    city:       req.body.order.shippingAddress.city,
                    postalCode: req.body.order.shippingAddress.postalCode,
                    country:    req.body.order.shippingAddress.country,
                },

                paymentMethod: req.body.order.paymentMethod,
                itemsPrice:    req.body.order.itemsPrice,
                shippingPrice: req.body.order.shippingPrice,
                taxPrice:      req.body.order.taxPrice,
                totalPrice:    req.body.order.totalPrice,
                user:          req.body.token
            })

            console.log('this is order: ', order)
            let createdOrder
            try {

                createdOrder = await order.save();
            } catch (error) {
                console.error('error in catch',error);
            }
            console.log('this is createdOrder: ', createdOrder)

            res
                .status(201)
                .send({ message: 'New Order Created', order: createdOrder });
        }
    }))

    // orderRouter.get(
    //     '/get',
    //     asyncHandler(async (req, res) => {
    //         const orders = await Order.find({});
    //         res.send(orders);
    //     })
    // );

orderRouter.get(
    '/:id',
    isAuth,
    asyncHandler(async (req, res) => {
        console.log('this is req.params.id: ',req.params.id)
        let order
        try {

            order = await Order.findById(req.params.id);
            console.log('this is order1: ', order)
        } catch (error) {
            console.error('error in catch',error);
        }
        console.log('this is order2: ', order)

        if (order._id) {
            console.log('order should have been sent')
            res.send(order);
        } else {
            console.log('order failed to send')
            res.status(404).send({ message: 'Order Not Found' });
        }
    })
);


orderRouter.put(
    '/:id/pay',
    isAuth,
    asyncHandler(async (req, res) => {
        const order = await Order.findById(req.params.id);
        if (order) {
            order.isPaid = true;
            order.paidAt = Date.now();
            order.paymentResult = {
                id: req.body.id,
                status: req.body.status,
                update_time: req.body.update_time,
                email_address: req.body.email_address,
            };
            const updatedOrder = await order.save();
            res.send({ message: 'Order Paid', order: updatedOrder });
        } else {
            res.status(404).send({ message: 'Order Not Found' });
        }
    })
);


export default orderRouter;
