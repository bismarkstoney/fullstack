const mongoose = require('mongoose');

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.mongourl, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
		});
		console.log(`The database in connected on ${conn.connection.host}`);
	} catch (error) {}
};
module.exports = connectDB;
