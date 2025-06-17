import express from 'express'
import cors from 'cors'
import session from 'express-session'
import dotenv from 'dotenv'
import nodemailer from 'nodemailer'

dotenv.config()

const PORT = process.env.PORT || 1111
const app = express()

//cross-origin resources enabled for everyone
app.use(cors())

//Middlewares for cors,body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

//Nodemailers setup steps

// 1. create a transporter
const transporter=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.GMAIL,
        pass:process.env.PASS
    }
})

// 2. create a mail which needed to transported
const mailOptions={
    from:"dav123rai@gmail.com",
    to:"davidkhaling123@gmail.com",
    subject:"just testing the nodemailer",
    text:"is working or not yapi?",
    html:"<marquee>hey there </marquee>",
    attachments:[
        {
            filename:"cat",
            path:"https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?cs=srgb&dl=pexels-pixabay-104827.jpg&fm=jpg"
        }
    ]
}


//Routes
app.get('/', (req, res) => {
    res.send('Hello World there');
});

//send email to my real gmail routes
app.get("/send",(req,res)=>{
    // 3. finally send the email to the receiption
transporter.sendMail(mailOptions,(err,info)=>{
    if(err){
        console.log(err)
        return res.status(500).send(err)
    }
    res.json(info)
})
})

//Listening to the request
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});