const { Joi } = require("../../../utils/schemaValidate");


const listSchema = Joi.object({
  // vlanguageId: Joi.string().label("vlanguageId").allow(""),
  isStatus: Joi.number().required().label("isStatus")

});


module.exports = listSchema



