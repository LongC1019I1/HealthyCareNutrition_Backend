const path = require("path");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const methodOverride = require("method-override");
const { engine } = require("express-handlebars");

const route = require("./routes");
const db = require("./config/db");
require("dotenv").config(); // Đọc biến môi trường từ file .env

const PORT = process.env.PORT || 5000; // Render sẽ cấp PORT
const MONGO_URI = process.env.MONGODB_URI; // Lấy URI từ Render hoặc file .env
// Connect to DB
// db.connect();

const app = express();
// const port = 5000;

// Use static folder
db.connect(MONGO_URI);

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use(methodOverride("_method"));

// HTTP logger
// app.use(morgan('combined'));

// Template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));
// Cho phép truy cập ảnh tĩnh
app.use("/uploads", express.static(path.join(__dirname, "./app/uploads")));
// Routes init
route(app);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
