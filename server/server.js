import express from 'express'
import cors from 'cors'
import session from 'express-session'
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 1111
const app = express()

app.use(cors())

//Middlewares for cors,body parsing

app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: "my-secret-key",
    cookie: { secure: false, httpOnly: true },
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

//Routes
app.get('/', (req, res) => {
    res.cookie("ram","hom mero name")
    res.send('Hello World there');
});

//Listening to the request
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});