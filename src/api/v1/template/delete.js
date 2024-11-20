const { Joi } = require("../../../utils/schemaValidate");


const deleteSchema = Joi.object({
  vTemplateId: Joi.string().required().label("vTemplateId"),
});


module.exports = deleteSchema






