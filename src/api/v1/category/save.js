const { Joi } = require("../../../utils/schemaValidate");

const saveSchema = Joi.object({
  vName: Joi.string().required().label("vName"),
  vStartColor: Joi.string().label("vStartColor").allow(""),
  vEndColor: Joi.string().label("vEndColor").allow(""),
});


module.exports = saveSchema