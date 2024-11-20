const { Joi } = require("../../../utils/schemaValidate");

const updateSchema = Joi.object({
  vTemplateId: Joi.string().required().label("vTemplateId"),
  vThumbImage: Joi.string().required().label("vThumbImage"),
  vOriginalImage: Joi.string().required().label("vOriginalImage")


});


module.exports = updateSchema

