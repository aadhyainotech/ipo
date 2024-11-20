const ObjectId = require("mongodb").ObjectId;
const dbService = require("../../utils/dbService");
const Message = require("../../utils/messages");
// import { UserRole } from "../../config/constants";

const save = async (entry) => {
  try {
    let {
      user: { _id: userId },
      body: { vScript, vBuyingRange, vTarget, vReturn, vDuration, isStatus },
    } = entry;

    // let vImages = "";
    // if (Object.keys(file).length) {
    //   vImages = "images/" + file.filename;
    // }
    // let filter = {
    //   isDeleted: false,
    //   vName,
    // };

    // let checkData = await dbService.findOneRecord("LanguageModel", filter, {
    //   _id: 1,
    // });
    // if (checkData) throw new Error(Message.recordNotFound);

    const saveData = await dbService.createOneRecord("StockAnalysisModel", {
      vScript,
      vBuyingRange,
      vTarget,
      vReturn,
      vDuration,
      isStatus,
      dtCreatedAt: Date.now(),
    });
    if (!saveData) throw new Error(Message.systemError);

    return saveData;
  } catch (error) {
    console.error("save ----------->", error);
    throw new Error(error?.message);
  }
};

module.exports = save;
