const express = require("express");
const shoppingRoutes = require("./routes/shoppingRoutes");
const connectDB = require("./config/dbConnection");

connectDB();
const app = express();
const PORT = 8000;

app.use(express.json());
app.use("/api/shopping", shoppingRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
