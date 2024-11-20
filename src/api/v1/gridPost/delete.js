const { Joi } = require("../../../utils/schemaValidate");

const deleteBannerSchema = Joi.object({
  vGridPostId: Joi.string().required().label("vGridPostId"),
});



module.exports = deleteBannerSchema;