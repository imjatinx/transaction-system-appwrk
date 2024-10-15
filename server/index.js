const express = require('express');
const dotenv = require('dotenv')
const cors= require('cors');
const connectDB = require('./config/db')
const transactionRoutes = require('./routes/transactionRoutes')

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config()
app.use(cors())
app.use(express.json())

app.use('/api', transactionRoutes) 


connectDB();

app.listen(PORT, ()=>{
    console.log(`listening on http://127.0.0.1:${PORT}`);
})