const express = require("express");
const shoppingRoutes = require("./routes/shoppingRoutes");
const connectDB = require("./config/dbConnection");
const dotenv = require("dotenv").config();

connectDB();
const app = express();
const PORT = process.env.PORT || 8001;

app.use(express.json());
app.use("/api/shopping", shoppingRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
