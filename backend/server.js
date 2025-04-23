const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"));

const profileRoutes = require("./routes/profiles");
app.use("/api/profiles", profileRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server started on port", PORT));