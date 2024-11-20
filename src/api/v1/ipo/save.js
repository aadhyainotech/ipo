const { Joi } = require("../../../utils/schemaValidate");
const saveSchema = Joi.object({
  // vIpoDate: Joi.string().required().label("vIpoDate"),
  vOfferPrice: Joi.string().label("vOfferPrice").allow(""),
  vLotSize: Joi.string().label("vLotSize").allow(""),
  vOpanDate: Joi.string().label("vIpoDate").allow(""),
  vCloseDate: Joi.string().label("vCloseDate").allow(""),
  vAllotmentDate: Joi.string().label("vAllotmentDate").allow(""),
  vRefundsDate: Joi.string().label("vRefundsDate").allow(""),
  vDematTransferDate: Joi.string().label("vDematTransferDate").allow(""),
  vListingDate: Joi.string().label("vListingDate").allow(""),
  vAboutCompany: Joi.string().label("vAboutCompany").allow(""),
  vName: Joi.string().required().label("vName"),
  vImage: Joi.string().required().label("vImage"),
  vAddress: Joi.string().required().label("vAddress"),
  vMobile: Joi.string().required().label("vMobile"),
  vEmail: Joi.string().required().label("vEmail"),
  vWebsite: Joi.string().required().label("vWebsite"),
  arrGmp: Joi.array().items({
    vDateTime: Joi.string().required().label("vDateTime"),
    iPrice: Joi.number().label("iPrice").allow("").default(0),
    vGmp: Joi.string().required().label("vGmp"),
    vSub2SaudaRateg: Joi.string().label("vSub2SaudaRateg").allow("").default(0),
    vListPrice: Joi.string().required().label("vListPrice"),
  }),
  arrLotSize: Joi.array().items({
    vApplication: Joi.string().required().label("vApplication"),
    iLots: Joi.number().required().label("iLots"),
    iShares: Joi.number().required().label("iShares"),
    iAmount: Joi.number().required().label("iAmount"),
  }),
  arrSubscription: Joi.array().items({
    vDate: Joi.string().required().label("vDate"),
    iQib: Joi.number().required().label("iQib"),
    iNii: Joi.number().required().label("iNii"),
    iRetail: Joi.number().required().label("iRetail"),
    iTotal: Joi.number().required().label("Total"),
  }),
  // isStatus: Joi.number().required().label("isStatus")
});

module.exports = saveSchema;
