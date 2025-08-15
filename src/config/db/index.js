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

// module.exports = { connect };
async function connect(uri) {
  try {
    await mongoose.connect(uri);
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ DB connection error:", error);
  }
}
