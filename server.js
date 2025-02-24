const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// Ensure "uploads" folder exists
const uploadPath = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath);
}

// Storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  },
});

const upload = multer({ storage: storage });

// Image Upload API
app.post("/upload", upload.array("images", 10), (req, res) => {
  const imageUrls = req.files.map(
    (file) => `http://localhost:4002/uploads/${file.filename}`
  );
  res.json({ imageUrls });
});

app.use("/uploads", express.static("uploads"));

app.listen(4002, () => console.log("Server running on http://localhost:4002"));
// Serve images statically
// app.use('/images', express.static('public/images'));

// API Endpoint for Image Upload
// app.post('/upload', upload.array('images', 5), (req, res) => {
//     const fileUrls = req.files.map(file => `http://localhost:4001/images/${file.filename}`);
//     res.json({ imageUrls: fileUrls });
// });

// Start Server
// const PORT = 4002;
// app.listen(PORT, () => {
//     console.log(`JSON Server is running on http://localhost:${PORT}`);
// });
