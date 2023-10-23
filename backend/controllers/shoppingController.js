const ShoppingModel = require("../models/ShoppingModel");
const AsyncHandler = require("express-async-handler");

//@description Get all shopping items
//@route GET /api/shopping
//@access public
const getAllShoppingItems = AsyncHandler(async (req, res) => {
  const shoppingList = await ShoppingModel.find();

  res.status(200).json(shoppingList);
});

//@description Create a shopping Item
//@route POST /api/shopping
//@access public
const createShoppingItem = AsyncHandler(async (req, res) => {
  const { item_name } = req.body;

  if (!item_name) {
    res.status(400);
    throw new Error("Must enter an item name");
  }

  const shoppingItem = await ShoppingModel.create({
    item_name,
  });

  res.status(200).json(shoppingItem);
});

module.exports = {
  getAllShoppingItems,
  createShoppingItem,
};
