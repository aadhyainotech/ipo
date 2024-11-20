const mongoose = require("mongoose");

const holidaySchema = new mongoose.Schema({

  arrHoliday: [],
  vYear: { type: String },
  isDeleted: { type: Boolean, default: false },
  isStatus: { type: Number },
  vCreatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "Created By" },
  vUpdatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "Updated By" },
  dtCreatedAt: Number,
  isUpdated: Boolean,
  dtUpdatedAt: Number,
  dtDeletedAt: Number,
});

module.exports = mongoose.model("tblholiday", holidaySchema);
