const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routers/auth");
const userRoute = require("./routers/users");
const postRoute = require("./routers/posts");
const categoryRoute = require("./routers/catagorys");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const PORT = 4000;

dotenv.config();
app.use(express.json());

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

app.listen(PORT, () => {
  console.log(`Backend is running on port ${PORT}`);
});
