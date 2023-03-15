import express from "express";
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import routes from './routes/index.js'
import dotenv from "dotenv"
// import paymentRoutes from './routes/payment.js'
dotenv.config()
const app = express()

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

// use express router
app.use('/', routes);


/* const CONNECTION_URL = 'mongodb+srv://ayush:ayush@cluster0.2mj7l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' */
const CONNECTION_URL = "mongodb+srv://ayush:ayush@cluster0.y0mjqdd.mongodb.net/?retryWrites=true&w=majority"

const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((e) => console.log(e))


mongoose.set('useFindAndModify', false)
