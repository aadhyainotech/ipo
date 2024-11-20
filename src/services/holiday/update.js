const ObjectId = require("mongodb").ObjectId;
const dbService = require("../../utils/dbService");
const Message = require("../../utils/messages");
// import { imageUpload } from "../../utils/imageUpload";

const update = async (entry) => {
  try {
    let {
      body: { vholidayId, arrHoliday, vYear, isStatus },
    } = entry;


    let condition = {
      _id: new ObjectId(vholidayId),
      isDeleted: false,
    };

    let userData = await dbService.findOneRecord("HolidayModel", condition, {
      _id: 1,
    });
    if (!userData) throw new Error(Message.userNotFound);

    let updateData = {
      arrHoliday,
      isUpdatedAt: Date.now(),
    };

    if (vYear) {
      updateData["vYear"] = vYear
    }

    if (isStatus != undefined) {
      updateData["isStatus"] = isStatus
    }

    let updateDrCat = await dbService.findOneAndUpdateRecord(
      "HolidayModel",
      condition,
      updateData,
      {
        returnOriginal: false,
      }
    );
    if (!updateDrCat) throw new Error(Message.systemError);
    return updateDrCat;
  } catch (error) {
    console.error("updateRole ----------->", error);
    throw new Error(error?.message);
  }
};

module.exports = update;
