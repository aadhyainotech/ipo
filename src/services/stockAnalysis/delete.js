const ObjectId = require("mongodb").ObjectId;
const dbService = require("../../utils/dbService");
const Message = require("../../utils/messages");

const deleteCat = async (antry) => {
  try {
    let {
      body: { vStockAnalysisId },
    } = antry;

    let condition = {
      _id: new ObjectId(vStockAnalysisId),
      isDeleted: false,
    };

    let updateData = {
      isDeleted: true,
    };

    let deleteStock = await dbService.findOneAndUpdateRecord(
      "LanguageModel",
      condition,
      updateData,
      {
        returnOriginal: false,
      },
      {
        isDeleted: 1,
      }
    );
    if (!deleteStock) throw new Error(Message.userNotFound);

    return deleteStock;
  } catch (error) {
    console.error("deleteCat ----------->", error);
    throw new Error(error?.message);
  }
};

module.exports = deleteCat;
