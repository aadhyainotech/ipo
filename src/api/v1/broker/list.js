const { Joi } = require("../../../utils/schemaValidate");


const listSchema = Joi.object({
  // vlanguageId: Joi.string().label("vlanguageId").allow(""),

});


module.exports = listSchema



