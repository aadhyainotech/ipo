const mongoose = require("mongoose");

const stockAnalysisSchema = new mongoose.Schema({
  vScript: { type: String },
  vBuyingRange: { type: String },
  vTarget: { type: String },
  vReturn: { type: String },
  vDuration: { type: String },
  isDeleted: { type: Boolean, default: false },
  isStatus: { type: Number },
  vCreatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "Created By" },
  vUpdatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "Updated By" },
  dtCreatedAt: Number,
  isUpdated: Boolean,
  dtUpdatedAt: Number,
  dtDeletedAt: Number,
});

module.exports = mongoose.model("tblstockanalysis", stockAnalysisSchema);
