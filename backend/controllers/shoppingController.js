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

//@description Delete a Shift Log
//@route DELETE /api/shiftlog
//@access public
const deleteShoppingitem = AsyncHandler(async (req, res) => {
  const shoppingItem = await ShoppingModel.findById(req.params.id);

  if (!shoppingItem) {
    res.status(404);
    throw new Error("Shift not found");
  }

  await ShoppingModel.deleteOne({ _id: req.params.id });
  res.status(200).json(shoppingItem);
});

module.exports = {
  getAllShoppingItems,
  createShoppingItem,
  deleteShoppingitem,
};
