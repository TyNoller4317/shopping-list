const express = require("express");
const {
  getAllShoppingItems,
  createShoppingItem,
  deleteShoppingitem,
} = require("../controllers/shoppingController");
const router = express.Router();

router.get("/", getAllShoppingItems);

router.post("/", createShoppingItem);

router.delete("/:id", deleteShoppingitem);

module.exports = router;
