const { Joi } = require("../../../utils/schemaValidate");


 const deleteSchema = Joi.object({
  vIpoId: Joi.string().required().label("vIpoId"),
});


module.exports = deleteSchema




 

