import express from 'express';
import Image from '../models/imagesModel.js';
import { isAdmin, isAuth } from '../utils.js';
import asyncHandler from 'express-async-handler';
import multer from 'multer';

const uploadRouter = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images');
    },
    filename: function (req, file, cb) {
        console.log('file---: ', file)
        cb(null, `${file.originalname}`);
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        // rejects storing a file
        cb(null, false);
    }
}

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});


uploadRouter.post(
    '/multer',
    isAuth,
    isAdmin,
    upload.array('files'), (req, res, next) => {
        try {
            let updatedImages = Image.insertMany(req.files);
            res.status(200).send({ message: 'Images Created', image: updatedImages });
        } catch (error) {
            console.error('error in catch', error);
        }
    }
)


uploadRouter.get(
    '/',
    asyncHandler(async (req, res) => {
        const images = await Image.find({});
        res.send(images);
    })
);



export default uploadRouter;