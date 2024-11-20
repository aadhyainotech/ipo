const mongoose = require("mongoose");

const frameSchema = new mongoose.Schema({
  vFramName: { type: String },
  vCatId: { type: mongoose.Schema.Types.ObjectId, ref: "vCatId" },
  vThumbImage: { type: String },
  vOriginalImage: { type: String },
  isTrending: { type: Boolean, default: false },
  isPremium: { type: Boolean, default: false },
  isDeleted: { type: Boolean, default: false },
  vCreatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "Created By" },
  vUpdatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "Updated By" },
  dtCreatedAt: Number,
  isUpdated: Boolean,
  dtUpdatedAt: Number,
  dtDeletedAt: Number,
});

module.exports = mongoose.model("tblFrame", frameSchema);
