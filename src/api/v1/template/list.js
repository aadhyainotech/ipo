const { Joi } = require("../../../utils/schemaValidate");


const listSchema = Joi.object({
  vCatId: Joi.string().required().label("vCatId"),
  iPage: Joi.number().required().label("iPage").default(1),
  iLimit: Joi.number().required().label("iLimit").default(10),
});


module.exports = listSchema



