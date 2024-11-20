const { type } = require("@hapi/joi/lib/extend");
const { string } = require("joi");
const mongoose = require("mongoose");

const ipoSchema = new mongoose.Schema({
  vOfferPrice: { type: String },
  vLotSize: { type: String },
  vOpanDate: { type: String, default: "" },
  vCloseDate: { type: String, default: "" },
  vAllotmentDate: { type: String, default: "" },
  vRefundsDate: { type: String, default: "" },
  vDematTransferDate: { type: String, default: "" },
  vListingDate: { type: String, default: "" },
  vAboutCompany: { type: String, default: "" },
  vName: { type: String },
  vImage: { type: String },
  vAddress: { type: String },
  vMobile: { type: String },
  vEmail: { type: String },
  vWebsite: { type: String },
  arrGmp: [],
  arrLotSize: [],
  arrSubscription: [],
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

module.exports = mongoose.model("tblipo", ipoSchema);
