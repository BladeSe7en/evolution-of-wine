import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
const data = {

    users: [
        {
            name: 'admin',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
            address: '123 Blue St. Temecula, Ca 92592'
        },
        {
            name: 'user',
            email: 'user@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
            address: '123 Red St. Temecula, Ca 92592'
        }
    ],
    products: [
        {
            _id: uuidv4(),
            name: 'Nike Slim Shirt 1',
            category: 'Shirts',
            image: ['/images/p1.jpg', '/images/p1.jpg', '/images/p1.jpg'],
            price: 120,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            _id: uuidv4(),
            name: 'Adidas Fit Shirt 1',
            category: 'Shirts',
            image: ['/images/p2.jpg', '/images/p2.jpg', '/images/p2.jpg'],
            price: 100,
            countInStock: 20,
            brand: 'Adidas',
            rating: 4.0,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            _id: uuidv4(),
            name: 'Lacoste Free Shirt 1',
            category: 'Shirts',
            image: ['/images/p3.jpg', '/images/p3.jpg', '/images/p3.jpg'],
            price: 220,
            countInStock: 0,
            brand: 'Lacoste',
            rating: 4.8,
            numReviews: 17,
            description: 'high quality product',
        },
        {
            _id: uuidv4(),
            name: 'Nike Slim Pant 1',
            category: 'Pants',
            image: ['/images/p4.jpg', '/images/p4.jpg', '/images/p4.jpg'],
            price: 78,
            countInStock: 15,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 14,
            description: 'high quality product',
        },
        {
            _id: uuidv4(),
            name: 'Puma Slim Pant 1',
            category: 'Pants',
            image: ['/images/p5.jpg', '/images/p5.jpg', '/images/p5.jpg'],
            price: 65,
            countInStock: 5,
            brand: 'Puma',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            _id: uuidv4(),
            name: 'Adidas Fit Pant 1',
            category: 'Pants',
            image: ['/images/p6.jpg', '/images/p6.jpg', '/images/p6.jpg'],
            price: 139,
            countInStock: 12,
            brand: 'Adidas',
            rating: 4.5,
            numReviews: 15,
            description: 'high quality product',
        },
        {
            _id: uuidv4(),
            name: 'Nike Slim Shirt 2',
            category: 'Shirts',
            image: ['/images/p1.jpg', '/images/p1.jpg', '/images/p1.jpg'],
            price: 120,
            countInStock: 10,
            brand: 'Nike',
            rating: 2.8,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            _id: uuidv4(),
            name: 'Adidas Fit Shirt 2',
            category: 'Shirts',
            image: ['/images/p2.jpg', '/images/p2.jpg', '/images/p2.jpg'],
            price: 100,
            countInStock: 20,
            brand: 'Adidas',
            rating: 4.3,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            _id: uuidv4(),
            name: 'Lacoste Free Shirt 2',
            category: 'Shirts',
            image: ['/images/p3.jpg', '/images/p3.jpg', '/images/p3.jpg'],
            price: 220,
            countInStock: 0,
            brand: 'Lacoste',
            rating: 4.1,
            numReviews: 17,
            description: 'high quality product',
        },
        {
            _id: uuidv4(),
            name: 'Nike Slim Pant 2',
            category: 'Pants',
            image: ['/images/p4.jpg', '/images/p4.jpg', '/images/p4.jpg'],
            price: 78,
            countInStock: 15,
            brand: 'Nike',
            rating: 4,
            numReviews: 14,
            description: 'high quality product',
        },
        {
            _id: uuidv4(),
            name: 'Puma Slim Pant 2',
            category: 'Pants',
            image: ['/images/p5.jpg', '/images/p5.jpg', '/images/p5.jpg'],
            price: 65,
            countInStock: 5,
            brand: 'Puma',
            rating: 3,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            _id: uuidv4(),
            name: 'Adidas Fit Pant 2',
            category: 'Pants',
            image: ['/images/p6.jpg', '/images/p6.jpg', '/images/p6.jpg'],
            price: 139,
            countInStock: 12,
            brand: 'Adidas',
            rating: 3.5,
            numReviews: 15,
            description: 'high quality product',
        },
        {
            _id: uuidv4(),
            name: 'Nike Slim Shirt 3',
            category: 'Shirts',
            image: ['/images/p1.jpg', '/images/p1.jpg', '/images/p1.jpg'],
            price: 120,
            countInStock: 10,
            brand: 'Nike',
            rating: 1.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            _id: uuidv4(),
            name: 'Adidas Fit Shirt 3',
            category: 'Shirts',
            image: ['/images/p2.jpg', '/images/p2.jpg', '/images/p2.jpg'],
            price: 100,
            countInStock: 20,
            brand: 'Adidas',
            rating: 2.0,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            _id: uuidv4(),
            name: 'Lacoste Free Shirt 3',
            category: 'Shirts',
            image: ['/images/p3.jpg', '/images/p3.jpg', '/images/p3.jpg'],
            price: 220,
            countInStock: 0,
            brand: 'Lacoste',
            rating: 4.8,
            numReviews: 17,
            description: 'high quality product',
        },
        {
            _id: uuidv4(),
            name: 'Nike Slim Pant 3',
            category: 'Pants',
            image: ['/images/p4.jpg', '/images/p4.jpg', '/images/p4.jpg'],
            price: 78,
            countInStock: 15,
            brand: 'Nike',
            rating: 4,
            numReviews: 14,
            description: 'high quality product',
        },
        {
            _id: uuidv4(),
            name: 'Puma Slim Pant 3',
            category: 'Pants',
            image: ['/images/p5.jpg', '/images/p5.jpg', '/images/p5.jpg'],
            price: 65,
            countInStock: 5,
            brand: 'Puma',
            rating: 2.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            _id: uuidv4(),
            name: 'Adidas Fit Pant 3',
            category: 'Pants',
            image: ['/images/p6.jpg', '/images/p6.jpg', '/images/p6.jpg'],
            price: 139,
            countInStock: 12,
            brand: 'Adidas',
            rating: 3.5,
            numReviews: 15,
            description: 'high quality product',
        },
    ],
};
export default data;