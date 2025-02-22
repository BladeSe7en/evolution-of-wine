import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const productSchema = new mongoose.Schema(
    {
       // name:         { type: String, required: true, unique: true },
        image:        [{ type: Schema.Types.ObjectId, ref: 'Image' }], 
        image:        { type: Array, required: true,  },
        brand:        { type: String, required: true },
        category:     { type: String, required: true },
        description:  { type: String, required: true },
        price:        { type: Number, required: true },
        countInStock: { type: Number, required: true },
        rating:       { type: Number, required: true },
        numReviews:   { type: Number, required: true },
        _id:          { type: String, required: true }
    },
    {
        timestamps: true,
    }
);
const Product = mongoose.model('Product', productSchema);

export default Product;
