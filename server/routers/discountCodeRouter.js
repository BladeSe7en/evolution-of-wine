import express from 'express';
import asyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import DiscountCode from '../models/discountCode.js';
import { generateToken, isAuth, isAdmin } from '../utils.js';

const discountCodeRouter = express.Router();

// gets code BY ID
discountCodeRouter.get(
    '/:id',
    isAuth,
    isAdmin,
    asyncHandler(async (req, res) => {
        const code = await DiscountCode.findById(req.params.id);
        if (code) {
            res.send(code);
        } else {
            res.status(404).send({ message: 'Invalid Discount Code' });
        }
    })
);

// gets all codes
discountCodeRouter.get(
    '/',
    isAuth,
    isAdmin,
    asyncHandler(async (req, res) => {
        const codes = await DiscountCode.find({});
        console.log('this is all codes: ',codes)
        res.send(codes);
    })
);

// creates new code
discountCodeRouter.post(
    '/createCode',
    isAuth,
    isAdmin,
    asyncHandler(async (req, res) => {
        console.log('req.body.name: ',req.body.name)
        console.log('req.body.doesThisExpire: ',req.body.doesThisExpire)
        console.log('req.body.duration: ',req.body.duration)
        console.log('req.body.isPercentage: ',req.body.isPercentage)
        console.log('req.body.discountValue: ',req.body.discountValue)
        console.log('req.body.expireDate: ',req.body.expireDate)
    
        const newCode = new DiscountCode({
            name: bcrypt.hashSync(req.body.name, 8),
            doesThisExpire: req.body.doesThisExpire,
            duration: req.body.duration,
            isPercentage: req.body.isPercentage,
            discount: req.body.discountValue,
            expireDate: req.body.expireDate,
        });
        const createdCode = await newCode.save();
        res.send({
            _id: createdCode._id,
            name: createdCode.name,
            doesThisExpire: createdCode.doesThisExpire,
            duration: createdCode.duration,
            isPercentage: createdCode.isPercentage,
            discount: createdCode.discount,
            expireDate: createdCode.expireDate,
            token: generateToken(createdCode),
        });
    })
);


// updates existing code
discountCodeRouter.put(
    '/updateCode',
    isAuth,
    isAdmin,
    asyncHandler(async (req, res) => {
        const code = await DiscountCode.findById(req.body._id);
        console.log('found code: ', code)
        if (code) {
            code.name = req.body.name || code.name;
            code.email = req.body.email || code.email;
            if (req.body.name) {
                code.name = bcrypt.hashSync(req.body.name, 8);
            }
            const updatedcode = await code.save();
            res.send({
                _id: updatedcode._id,
                name: updatedcode.name,
                email: updatedcode.email,
                isAdmin: updatedcode.isAdmin,
                token: generateToken(updatedcode),
            });
        }
    })
);


// deletes code
discountCodeRouter.delete(
    '/:id',
    isAuth,
    isAdmin,
    asyncHandler(async (req, res) => {
        const code = await DiscountCode.findById(req.params.id);
        if (user) {
            const deleteCode = await code.remove();
            res.send({ message: 'Discount Code Deleted', code: deleteCode });
        } else {
            res.status(404).send({ message: 'Discount Code Not Found' });
        }
    })
);

export default discountCodeRouter;

