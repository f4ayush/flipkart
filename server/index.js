import express from "express";
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import buyerRoutes from './routes/buyer.js'
import sellerRoutes from './routes/seller.js'

const app = express()

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

app.use('/', buyerRoutes)
app.use('/seller', sellerRoutes)

const CONNECTION_URL = 'mongodb+srv://ayush:ayush@cluster0.2mj7l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((e) => console.log(e))


mongoose.set('useFindAndModify', false)

// items
// users
// add to cart