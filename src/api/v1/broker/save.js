const { Joi } = require("../../../utils/schemaValidate");

const saveSchema = Joi.object({

  arrBroker: Joi.array().items(
    {
      iRank: Joi.number().required().label("iRank"),
      vBroker: Joi.string().required().label("vBroker"),
      iActiveClients: Joi.number().required().label("iActiveClients"),
    }
  ),
  vYear: Joi.string().required().label("vYear"),

});


module.exports = saveSchema