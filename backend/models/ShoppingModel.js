const mongoose = require("mongoose");

const shoppingSchema = mongoose.Schema({
  item_name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Shopping", shoppingSchema);
