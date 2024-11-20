const mongoose = require("mongoose");


const gridPostSchema = new mongoose.Schema({
  vImage: { type: String },
  isDeleted: { type: Boolean, default: false },
  // isActive: { type: Boolean, default: false },
  vGrid: { type: String },
  dtCreatedAt: Number,
  dtDeletedAt: Number,
  isUpdated: Boolean,
  dtUpdatedAt: Number,
});

module.exports = mongoose.model("tblgridpost", gridPostSchema);
