import mongoose from 'mongoose';

const sellerSchema = mongoose.Schema({
    id: { type: String },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    products: { type: Array },
})

var sellerDescription = mongoose.model('ItemDescription', sellerSchema);

export default sellerDescription;