const { Joi } = require("../../../utils/schemaValidate");
const updateSchema = Joi.object({
  vIpoId: Joi.string().required().label("vIpoId"),
  vOfferPrice: Joi.string().label("vOfferPrice").allow(""),
  vLotSize: Joi.string().label("vLotSize").allow(""),
  vOpanDate: Joi.string().required().label("vIpoDate"),
  vCloseDate: Joi.string().required().label("vCloseDate"),
  vAllotmentDate: Joi.string().required().label("vAllotmentDate"),
  vRefundsDate: Joi.string().required().label("vRefundsDate"),
  vDematTransferDate: Joi.string().required().label("vDematTransferDate"),
  vListingDate: Joi.string().required().label("vListingDate"),
  vAboutCompany: Joi.string().required().label("vAboutCompany"),
  vName: Joi.string().required().label("vName"),
  vImage: Joi.string().required().label("vImage"),
  vAddress: Joi.string().required().label("vAddress"),
  vMobile: Joi.string().label("vMobile").allow(""),
  vEmail: Joi.string().label("vEmail").allow(""),
  vWebsite: Joi.string().label("vWebsite").allow(""),
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

module.exports = updateSchema;
