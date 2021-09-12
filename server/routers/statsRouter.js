import express from 'express';
import asyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import DiscountCode from '../models/discountCode.js';
import { generateToken, isAuth, isAdmin } from '../utils.js';
import Stats from '../models/statsModel.js';
import mongoose from 'mongoose';
import Order from '../models/orderModel.js';
import { updateTotalCartItems } from '../../src/Components/CartCheckoutComponents/Cart/CartActions.js';
import _ from 'underscore-node';



const statsRouter = express.Router();

// gets code BY ID
// statsRouter.get(
//     '/:id',
//     isAuth,
//     isAdmin,
//     asyncHandler(async (req, res) => {
//         const code = await Stats.findById(req.params.id);
//         if (code) {
//             res.send(code);
//         } else {
//             res.status(404).send({ message: 'Invalid Discount Code' });
//         }
//     })
// );

// gets all codes
statsRouter.get(
    '/',
    isAuth,
    isAdmin,
    asyncHandler(async (req, res) => {
        const statData = await Stats.find({});
        console.log('this is all statData: ', statData)
        res.send(statData);
    })
);

// creates new code
// discountCodeRouter.post(
//     '/createCode',
//     isAuth,
//     isAdmin,
//     asyncHandler(async (req, res) => {
//         console.log('req.body.name: ',req.body.name)
//         console.log('req.body.doesThisExpire: ',req.body.doesThisExpire)
//         console.log('req.body.duration: ',req.body.duration)
//         console.log('req.body.isPercentage: ',req.body.isPercentage)
//         console.log('req.body.discountValue: ',req.body.discountValue)
//         console.log('req.body.expireDate: ',req.body.expireDate)






//         const newCode = new DiscountCode({
//             name: req.body.name,
//             doesThisExpire: req.body.doesThisExpire,
//             duration: req.body.duration,
//             isPercentage: req.body.isPercentage,
//             discount: req.body.discountValue,
//             expireDate: req.body.expireDate,
//         });
//         const createdCode = await newCode.save();
//         res.send({
//             _id: createdCode._id,
//             name: createdCode.name,
//             doesThisExpire: createdCode.doesThisExpire,
//             duration: createdCode.duration,
//             isPercentage: createdCode.isPercentage,
//             discount: createdCode.discount,
//             expireDate: createdCode.expireDate,
//             token: generateToken(createdCode),
//         });
//     })
// );


// // updates existing code
// discountCodeRouter.put(
//     '/updateCode/:id',
//     isAuth,
//     isAdmin,
//     asyncHandler(async (req, res) => {
//         const code = await DiscountCode.findById(req.params.id);
//         console.log('req.body._id: ',req.params.id)
//         console.log('found code: ', code)

//         if (code) {
//             code.name           = req.body.name           || code.name;
//             code.doesThisExpire = req.body.doesThisExpire || code.doesThisExpire;
//             code.duration       = req.body.duration       || code.duration;
//             code.isPercentage   = req.body.isPercentage   || code.isPercentage;
//             code.discount       = req.body.discountValue  || code.discountValue;
//             code.expireDate     = req.body.expireDate     || code.expireDate;

//             const updatedcode = await code.save();
//             res.send({
//                 _id           : updatedcode._id,
//                 name          : updatedcode.name,
//                 doesThisExpire: updatedcode.doesThisExpire,
//                 duration      : updatedcode.duration,
//                 isPercentage  : updatedcode.doesThisExpire,
//                 discount      : updatedcode.discount,
//                 expireDate    : updatedcode.expireDate,


//             });
//         }
//     })
// );


// // deletes code
// discountCodeRouter.delete(
//     '/:id',
//     isAuth,
//     isAdmin,
//     asyncHandler(async (req, res) => {
//     const code = await DiscountCode.findById(req.params.id);
//         console.log('found code to delete: code')
//         if (code) {
//             const deleteCode = await code.remove();
//             res.send({ message: 'Discount Code Deleted', code: deleteCode });
//         } else {
//             res.status(404).send({ message: 'Discount Code Not Found' });
//         }
//     })
// );

statsRouter.post(
    '/:month',
    // isAuth,
    // isAdmin,
    asyncHandler(async (req, res, next) => {
        let month = new Date(req.params.month);

        let numMonth = month.getMonth()
        console.log('numMonth: ',numMonth)
        // const orders = await Order.find({}).populate('user', 'name');
        //     console.log('all orders: ',orders)
        

        const soldProducts = await Order.aggregate(
            [
                {
                    $match: { isPaid: true }
                },

                {
                    $group: {
                        _id: { month: { $month: "$paidAt" }, year: { $year: "$paidAt" } },
                        totalAmount: { $sum: '$totalPrice' },
                        cartItems: { $push: '$cartItems' },
                        count: { $sum: 1 }
                    }
                },

            ]
        );
        console.log('this is soldProducts: ', soldProducts)

        let final = []
        for (let i = 0; i < soldProducts.length; i++) {
            let products = []
            const monthlyProd = soldProducts[i].cartItems.flat()
            monthlyProd.map((prod) => {
                let found = products.find(el => el.name === prod.name)
                if (found) {
                    let index = products.findIndex(index => index.name === found.name)
                    products[index].qty += prod.qty
                    products[index].price += prod.price
                } else {
                    products.push(prod)
                }
            })
            final.push(
                {
                    _id: soldProducts[i]._id,
                    totalAmount: soldProducts[i],
                    products
                })
        }
        console.log('final: ', final)


        res.send({ final });


    })

    // } else {
    //     res.send({ message: 'We have a key!', created });
    //     res.status(404).send({ message: 'Discount soldProducts Not Found' });
    // }
)

export default statsRouter;

