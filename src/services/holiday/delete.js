const ObjectId = require("mongodb").ObjectId;
const dbService = require("../../utils/dbService");
const Message = require("../../utils/messages");

const deleteCat = async (antry) => {
  try {
    let {
      body: { vholidayId },
    } = antry;

    let condition = {
      _id: new ObjectId(vholidayId),
      isDeleted: false,
    };

    let updateData = {
      isDeleted: true,
    };

    let deleteHoliday = await dbService.findOneAndUpdateRecord(
      "HolidayModel",
      condition,
      updateData,
      {
        returnOriginal: false,
      },
      {
        isDeleted: 1,
      }
    );
    if (!deleteHoliday) throw new Error(Message.userNotFound);

    return deleteHoliday;
  } catch (error) {
    console.error("delete----------->", error);
    throw new Error(error?.message);
  }
};

module.exports = deleteCat;
