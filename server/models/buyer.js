import mongoose from 'mongoose'

const itemSchema = mongoose.Schema({
    seller_id: { type: String, required: true },
    products: { type: Array },
})

export default mongoose.model('User', itemSchema)