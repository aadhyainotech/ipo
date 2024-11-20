const { Joi } = require("../../../utils/schemaValidate");

const updateSchema = Joi.object({
  vCatId: Joi.string().required().label("vCatId").trim(),
  vName: Joi.string().required().label("vName").trim(),
});


module.exports = updateSchema

