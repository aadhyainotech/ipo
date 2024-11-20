const { Joi } = require("../../../utils/schemaValidate");

const updateSchema = Joi.object({
  vTopGainId: Joi.string().required().label("vTopGainId"),
  arrStockList: Joi.array().items(
    {
      vCompanyName: Joi.string().required().label("vCompanyName"),
      vSecurityName: Joi.string().required().label("vSecurityName"),
      iSecurityCode: Joi.number().label("iSecurityCode").allow("").default(0),
      vExchange: Joi.string().required().label("vExchange"),
      iStockPrice: Joi.number().required().label("iStockPrice"),
      iPreviousclosingprice: Joi.number().required().label("iPreviousclosingprice"),
      iPriceChange: Joi.number().required().label("iPriceChange"),
      iChange: Joi.number().required().label("iChange"),
      vLastModifiedDate: Joi.string().required().label("vLastModifiedDate"),
    }
  ),
  isStatus: Joi.number().required().label("isStatus"),
});


module.exports = updateSchema

