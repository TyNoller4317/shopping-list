const express = require("express");
const {
  getAllShoppingItems,
  createShoppingItem,
} = require("../controllers/shoppingController");
const router = express.Router();

router.get("/", getAllShoppingItems);

router.post("/", createShoppingItem);

module.exports = router;
