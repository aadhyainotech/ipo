const { Joi } = require("../../../utils/schemaValidate");


 const deleteSchema = Joi.object({
  vStockAnalysisId: Joi.string().required().label("vStockAnalysisId"),
});


module.exports = deleteSchema




 

