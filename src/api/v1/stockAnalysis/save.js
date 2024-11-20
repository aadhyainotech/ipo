const { Joi } = require("../../../utils/schemaValidate");

const saveSchema = Joi.object({
  vScript: Joi.string().required().label("vScript"),
  vBuyingRange: Joi.string().required().label("vBuyingRange"),
  vTarget: Joi.string().required().label("vTarget"),
  vReturn: Joi.string().required().label("vReturn"),
  vDuration: Joi.string().required().label("vEvening"),
  isStatus: Joi.number().required().label("isStatus"),
});

module.exports = saveSchema;
