const { Joi } = require("../../../utils/schemaValidate");


const deleteSchema = Joi.object({
  vTopGainId: Joi.string().required().label("vTopGainId"),
});


module.exports = deleteSchema






