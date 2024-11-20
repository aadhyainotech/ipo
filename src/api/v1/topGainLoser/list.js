const { Joi } = require("../../../utils/schemaValidate");


const listSchema = Joi.object({
  isStatus: Joi.number().required().label("isStatus"),
});


module.exports = listSchema



