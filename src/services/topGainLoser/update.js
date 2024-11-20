const ObjectId = require("mongodb").ObjectId;
const dbService = require("../../utils/dbService");
const Message = require("../../utils/messages");
// import { imageUpload } from "../../utils/imageUpload";

const update = async (entry) => {
  try {
    let {
      body: { vTopGainId, arrStockList, isStatus },
    } = entry;


    let condition = {
      _id: new ObjectId(vTopGainId),
      isDeleted: false,
    };

    let userData = await dbService.findOneRecord("TopGainLoserModel", condition, {
      _id: 1,
    });
    if (!userData) throw new Error(Message.userNotFound);

    let updateData = {
      arrStockList,
      isUpdatedAt: Date.now(),
    };

    if (isStatus) {
      updateData["isStatus"] = isStatus
    }


    let update = await dbService.findOneAndUpdateRecord(
      "TopGainLoserModel",
      condition,
      updateData,
      {
        returnOriginal: false,
      }
    );
    if (!update) throw new Error(Message.systemError);
    return update;
  } catch (error) {
    console.error("update ----------->", error);
    throw new Error(error?.message);
  }
};

module.exports = update;
