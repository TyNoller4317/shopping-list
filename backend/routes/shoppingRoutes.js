const express = require("express");
const {
  getAllShoppingItems,
  createShoppingItem,
  deleteShoppingitem,
} = require("../controllers/shoppingController");
const router = express.Router();
const test = "";

router.get("/", getAllShoppingItems);

router.post("/", createShoppingItem);

router.delete("/:id", deleteShoppingitem);

module.exports = router;
