const ObjectId = require("mongodb").ObjectId;
const dbService = require("../../utils/dbService");
const Message = require("../../utils/messages");
// import { imageUpload } from "../../utils/imageUpload";

const update = async (entry) => {
  try {
    let {
      body: {
        vStockAnalysisId,
        vScript,
        vBuyingRange,
        vTarget,
        vReturn,
        vDuration,
        isStatus,
      },
    } = entry;

    let condition = {
      _id: new ObjectId(vStockAnalysisId),
      isDeleted: false,
    };

    let userData = await dbService.findOneRecord(
      "StockAnalysisModel",
      condition,
      {
        _id: 1,
      }
    );
    if (!userData) throw new Error(Message.userNotFound);

    let updateData = {
      vScript,
      vBuyingRange,
      vTarget,
      vReturn,
      vDuration,
      isStatus,
      isUpdatedAt: Date.now(),
    };

    let updateDrCat = await dbService.findOneAndUpdateRecord(
      "StockAnalysisModel",
      condition,
      updateData,
      {
        returnOriginal: false,
      }
    );
    if (!updateDrCat) throw new Error(Message.systemError);
    return updateDrCat;
  } catch (error) {
    console.error("update ----------->", error);
    throw new Error(error?.message);
  }
};

module.exports = update;
