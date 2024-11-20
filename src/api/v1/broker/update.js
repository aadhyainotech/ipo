const { Joi } = require("../../../utils/schemaValidate");

const updateSchema = Joi.object({
  vBrokerId: Joi.string().required().label("vBrokerId"),
  arrBroker: Joi.array().items(
    {
      iRank: Joi.number().required().label("iRank"),
      vBroker: Joi.string().required().label("vBroker"),
      iActiveClients: Joi.number().required().label("iActiveClients"),
    }
  ),
  vYear: Joi.string().label("vYear").allow(""),
});


module.exports = updateSchema

