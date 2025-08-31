require('dotenv').config(); // Load environment variables
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const {authRouter} = require('./routes/authRouter');
const {ownerRouter} = require('./routes/ownerRouter');
const {bookingRouter} = require('./routes/bookingRouter');
const { guestbookingRouter } = require('./routes/userRouter');
const app = express();
// Middleware
app.use(express.json());// parse json data in incoming requests req.body
// app.use(express.urlencoded({extended:true}));
app.use(cors());

//it runs for every request. rerendered
app.use((req,res,next)=>{
  console.log('Url:'+req.url+"Method:"+req.method);
  next();
})

// Routes
app.get('/', (req, res) => {
  res.send('hello');
});

 app.use('/api/user', authRouter);//route banauna lako 
 app.use('/api/owner', ownerRouter);
 app.use('/api/booking',bookingRouter)
 app.use('/api/guestbooking',guestbookingRouter);
// Connect to MongoDB and then start server
mongoose.connect(process.env.MONGODB_URI)
  .then(()=>{
    console.log('mongodb database connected successfully');
    const PORT=process.env.PORT||3000;
    app.listen(PORT,()=>{
      console.log(`Server is running at the port ${PORT}`);
    })
  })
  .catch((err) => {
    console.log('Error occurred while connecting to the database', err);
  });
