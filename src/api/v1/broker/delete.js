const { Joi } = require("../../../utils/schemaValidate");


const deleteSchema = Joi.object({
  vBrokerId: Joi.string().required().label("vBrokerId"),
});


module.exports = deleteSchema






