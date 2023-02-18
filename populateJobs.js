const mockData = require('./MOCK_DATA.json');
require('dotenv').config();
const Job = require('./models/Job');
const connectDB = require('./db/connect');
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Job.deleteMany();
    await Job.create(mockData);
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
start();
