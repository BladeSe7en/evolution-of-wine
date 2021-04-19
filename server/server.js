import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import userRouter from './routers/userRouter.js';
import dotenv from 'dotenv'
import productRouter from './routers/productRouter.js';
import orderRouter from './routers/orderRouter.js';
import uploadRouter from './routers/uploadRouter.js';
import errorhandler from 'errorhandler';
import notifier from 'node-notifier';
import discountCodeRouter from './routers/discountCodeRouter.js';
dotenv.config()


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});



app.use('/api/uploads', uploadRouter);
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);
app.use('/api/discountCode', discountCodeRouter);
app.get('/api/config/paypal', (req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID || 'sb')
});


const __dirname = path.resolve();
app.use(express.static(`${__dirname}/build`));
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
app.use('/images', express.static('uploads'));

app.get('/', (req, res) => {
    res.send('Server is ready');
});

// app.use((err, req, res, next) => {
//     res.status(500).send({ message: err.message });
// });

app.use((err, req, res, next) => {
    if (err) {
        console.log('---Error---', err);
    } else {
        console.log('404')
    }
});
const connection = mongoose.connection;

connection.once("open", function () {
    console.log("MongoDB database connection established successfully");
});



const port = process.env.PORT || 3001;
console.log('THIS IS PORT: ', port)
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
