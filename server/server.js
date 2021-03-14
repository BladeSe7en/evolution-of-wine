import express from 'express';
import data from '../src/data.js';
import path from 'path';


const app = express();

const __dirname = path.resolve();
app.use(express.static(`${__dirname}/build`));

app.get('/api/products', (req, res) => {
    res.send(data.products);
});

app.get('/api/products/:id', (req, res) => {
    const product = data.products.find((x) => x._id === req.params.id);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ message: 'Product Not Found' });
    }
});

app.get('/', (req, res) => {
    res.send('Server is ready');
});
const port = process.env.PORT || 3001;
console.log('THIS IS PORT: ', port)
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
