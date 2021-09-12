import mongoose from 'mongoose';

const discountCodeSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        doesThisExpire: { type: Boolean, required: true },
        duration: { type: Number },
        isPercentage: { type: Boolean, required: true },
        discount: { type: Number, required: true },
        expireDate: { type: String },
        timesUsed: { type: Number, required: true, default: 0 },
    },
    {
        timestamps: true,
    }
)

const discountCode = mongoose.model('discountCode', discountCodeSchema);
export default discountCode;
