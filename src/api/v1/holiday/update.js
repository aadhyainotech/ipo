const { Joi } = require("../../../utils/schemaValidate");

const updateSchema = Joi.object({
  vholidayId: Joi.string().required().label("vholidayId"),
  arrHoliday: Joi.array().items(
    {
      iSrNo: Joi.number().required().label("iSrNo"),
      vDate: Joi.string().required().label("vName"),
      vHoliday: Joi.string().required().label("vName"),
    }
  ),
  vYear: Joi.string().label("vYear").allow(""),
  isStatus: Joi.number().label("isStatus").allow("")
});


module.exports = updateSchema

