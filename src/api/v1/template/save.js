const { Joi } = require("../../../utils/schemaValidate");

const saveSchema = Joi.object({
  // vImageName: Joi.string().required().label("vImageName"),
  vCatId: Joi.string().required().label("vCatId"),
  // vThumbImage: Joi.string().required().label("vThumbImage"),
  // vOriginalImage: Joi.string().required().label("vOriginalImage"),
  isTrending: Joi.boolean().label("isTrending").allow(""),
  isPremium: Joi.boolean().label("isPremium").allow(""),

  // vDiscription: Joi.string().label("vDiscription").allow(""),
});


module.exports = saveSchema