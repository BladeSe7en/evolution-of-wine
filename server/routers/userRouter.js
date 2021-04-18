import express from 'express';
import asyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import data from '../data.js';
import User from '../models/userModel.js';
import { generateToken, isAuth, isAdmin } from '../utils.js';

const userRouter = express.Router();

userRouter.get(
    '/seed',
    asyncHandler(async (req, res) => {
        // await User.remove({});
        const createdUsers = await User.insertMany(data.users);
        res.send({ createdUsers });
    })
);


userRouter.get(
    '/:id',
    asyncHandler(async (req, res) => {
        const user = await User.findById(req.params.id);
        if (user) {
            res.send(user);
        } else {
            res.status(404).send({ message: 'User Not Found' });
        }
    })
);


userRouter.get(
    '/',
    isAuth,
    isAdmin,
    asyncHandler(async (req, res) => {
        const users = await User.find({});
        console.log('this is all users: ',users)
        res.send(users);
    })
);


userRouter.post(
    '/signin',
    asyncHandler(async (req, res) => {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            if (bcrypt.compareSync(req.body.password, user.password)) {
                res.send({
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    isAdmin: user.isAdmin,
                    address: user.address,
                    token: generateToken(user),
                });
                return;
            }
        }
        res.status(401).send({ message: 'Invalid email or password' });
    })
);


userRouter.post(
    '/register',
    asyncHandler(async (req, res) => {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8),
        });
        const createdUser = await user.save();
        res.send({
            _id: createdUser._id,
            name: createdUser.name,
            email: createdUser.email,
            isAdmin: createdUser.isAdmin,
            token: generateToken(createdUser),
        });
    })
);


userRouter.put(
    '/profile',
    isAuth,
    asyncHandler(async (req, res) => {
        const user = await User.findById(req.body.user);
        console.log('found user: ', user)
        if (user) {
            user.name = req.body.name || user.name;
            user.email = req.body.email || user.email;
            if (req.body.password) {
                user.password = bcrypt.hashSync(req.body.password, 8);
            }
            const updatedUser = await user.save();
            res.send({
                _id: updatedUser._id,
                name: updatedUser.name,
                email: updatedUser.email,
                isAdmin: updatedUser.isAdmin,
                token: generateToken(updatedUser),
            });
        }
    })
);


userRouter.put(
    '/:id',
    isAuth,
    isAdmin,
    asyncHandler(async (req, res) => {
        const user = await User.findById(req.params.id);
        console.log('req.body: ',req.body)
        console.log('req.body.name: ',req.body.name)
        console.log('req.body.email: ',req.body.email)
        
        console.log('req.body.isAdmin: ',req.body.isAdmin)
        
        if (user) {
            user.name = req.body.name || user.name;
            user.email = req.body.email || user.email;
            user.isAdmin = req.body.isAdmin || user.isAdmin;
            console.log('req.body.name: ',user.name)
            console.log('req.body.email: ',user.email)
            console.log('req.body.isAdmin: ',user.isAdmin)
            const updatedUser = await user.save();
            res.send({ message: 'User Updated', user: updatedUser });
        } else {
            res.status(404).send({ message: 'User Not Found' });
        }
    })
);


userRouter.delete(
    '/:id',
    isAuth,
    isAdmin,
    asyncHandler(async (req, res) => {
        const user = await User.findById(req.params.id);
        if (user) {
            if (user.email === 'admin@example.com') {
                res.status(400).send({ message: 'Can Not Delete Admin User' });
                return;
            }
            const deleteUser = await user.remove();
            res.send({ message: 'User Deleted', user: deleteUser });
        } else {
            res.status(404).send({ message: 'User Not Found' });
        }
    })
);

export default userRouter;

