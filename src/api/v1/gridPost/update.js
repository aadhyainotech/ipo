const { Joi } = require("../../../utils/schemaValidate");

const updateSchema = Joi.object({
  vGridPostId: Joi.string().required().label("vGridPostId"),
  vGrid: Joi.string().required().label("vGrid"),
});

module.exports = updateSchema;
