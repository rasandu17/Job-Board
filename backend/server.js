const express = require("express");
const mongoose = require("mongoose");
const jobroutes = require("./routes/jobRoutes");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());


// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'job'
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

  app.use("/api/jobs", jobroutes);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
