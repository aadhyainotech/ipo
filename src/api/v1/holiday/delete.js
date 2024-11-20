const { Joi } = require("../../../utils/schemaValidate");

const deleteSchema = Joi.object({
  vholidayId: Joi.string().required().label("vholidayId"),
});

module.exports = deleteSchema;
