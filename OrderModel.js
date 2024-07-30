const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    order_no: {
      type: String,
      unique: true,
      required: [true, "order no is required"],
    },
    customer_mob: {
      type: String,
      required: [true, "Customer number is required"],
    },
    status: {
      type: String,
      default: "open",
      required: [true, "status is required"],
    },
    grand_total: {
      type: Number,
      default: 0,
      required: [true, "total is required"],
    },
    table_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "table",
      required: [true, "table id is required"],
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: [true, "user id is required"],
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("orders", orderSchema);
module.exports = Order;
