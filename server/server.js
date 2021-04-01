import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import userRouter from './routers/userRouter.js';
import dotenv from 'dotenv'
import productRouter from './routers/productRouter.js';
import orderRouter from './routers/orderRouter.js';
dotenv.config()


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

const __dirname = path.resolve();
app.use(express.static(`${__dirname}/build`));


app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);
app.get('/api/config/paypal', (req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID || 'sb')
});

app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});

const connection = mongoose.connection;

connection.once("open", function() {
    console.log("MongoDB database connection established successfully");
});


const port = process.env.PORT || 3001;
console.log('THIS IS PORT: ', port)
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
