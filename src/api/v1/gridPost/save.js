const { Joi } = require("../../../utils/schemaValidate");

const saveSchema = Joi.object({
  vGrid: Joi.string().label("vGrid"),
});

module.exports = saveSchema;
