import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import passport from 'passport'
import googleStrategy from 'passport-google-oauth20'

dotenv.config()

const PORT = process.env.PORT || 1111
const app = express()

//Middlewares for cors,body parsing
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

//Routes
app.get('/', (req, res) => {
    res.send('Hello World');
});

//Listening to the request
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});