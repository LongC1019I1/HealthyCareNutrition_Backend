// const mongoose = require('mongoose');

// async function connect() {
//     try {
//         await mongoose.connect('mongodb://localhost:27017/f8_education_dev', {

//             useUnifiedTopology: true,

//         });
//         console.log('Connect successfully!!!');
//     } catch (error) {
//         console.log('Connect failure!!!');
//     }
// }


const mongoose = require("mongoose");

async function connect(MONGO_URI) {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected successfully!");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1); // Dừng app nếu không kết nối được
  }
}

module.exports = { connect };