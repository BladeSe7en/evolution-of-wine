// import mongoose from 'mongoose';

// const imageSchema = new mongoose.Schema(
//     {
//         name: String,
//         img:
//         {
//             data: Buffer,
//             contentType: String
//         }
//     }
// )

// const Image = mongoose.model('Image', imageSchema);
// export default Image;

import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema(
    {
        fieldname: { type: String, required: true },
        originalname: { type: String, required: true },
        encoding: { type: String, required: true },
        mimetype: { type: String, required: true },
        destination: { type: String, required: true },
        filename: { type: String, required: true },
        path: { type: String, required: true },
        size: { type: Number, required: true },
    }
)

const Image = mongoose.model('Image', imageSchema);
export default Image;