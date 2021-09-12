import mongoose from 'mongoose';
import findOrCreate from 'mongoose-findorcreate';
const statsSchema = new mongoose.Schema(
    {
        month: { type: String, required: true },
        productSold: [
            {
                productName: { type: String, required: true },
                totalPriceAtSale: { type: Number, required: true },
                qtySold: { type: Number, required: true },
            }
        ]
    },
    {
        timestamps: true,
    }
)


statsSchema.plugin(findOrCreate);
const stats = mongoose.model('stats', statsSchema);
export default stats;


// To update the values at point of sale I take todays date at time of sale format 
// it as ‘April 2021’ then do a find or create match for ‘April 2021’ If it exists, do another
//  find or create for ProductName. Then finally push the new stats into ProductSold.ProductName 
// and do a reduce function to add the totals for itemsSold and TotalSales.

// step 1: take todays date at time of sale format it as ‘April 2021’
// step 2: do a find or create match on Stats.months.dateOfMonth to equal todaysDate // todays date looks like ‘April 2021'
//    step 2a IF found, that month already exists. take new sales totals










