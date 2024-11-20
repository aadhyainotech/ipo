const { Joi } = require("../../../utils/schemaValidate");

const listSchema = Joi.object({
  vGridPostId: Joi.string().label("vGridPostId").allow(""),
});

module.exports = listSchema;