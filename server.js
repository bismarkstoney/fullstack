const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const userRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const contactRouter = require('./routes/contacts');
const connectDB = require('./config/db');
dotenv.config({ path: './config/config.env' });

//connect databse
connectDB();
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}
//mount routes

app.use('/api/v1/users', userRouter);
app.use('/api/v1/contacts', contactRouter);
app.use('/api/v1/auth', authRouter);

app.listen(PORT, () => {
	console.log(`The server is running on ${PORT}`);
});
