const { Schema } = require("mongoose");

const Cabana = new Schema(
  {
    location: { type: String, required: true },
    type: { type: String, required: true },
    bookedDates: [{ type: String }],
    image: { type: String },
  },

  { timestamps: true }
);
module.exports = Cabana;
