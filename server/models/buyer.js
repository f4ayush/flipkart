import mongoose from 'mongoose'

const buyerSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
})

var buyerDescription = mongoose.model('Buyer', buyerSchema)
export default buyerDescription