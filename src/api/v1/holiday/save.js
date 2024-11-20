const { Joi } = require("../../../utils/schemaValidate");

const saveSchema = Joi.object({

  arrHoliday: Joi.array().items(
    {
      iSrNo: Joi.number().required().label("iSrNo"),
      vDate: Joi.string().required().label("vName"),
      vHoliday: Joi.string().required().label("vName"),
      vMorning: Joi.string().label("vMorning").allow(""),
      vEvening: Joi.string().label("vEvening").allow(""),
    }
  ),
  vYear: Joi.string().required().label("vYear"),
  isStatus: Joi.number().required().label("isStatus")

});


module.exports = saveSchema


