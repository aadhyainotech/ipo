const ObjectId = require("mongodb").ObjectId;
const dbService = require("../../utils/dbService");
const Message = require("../../utils/messages");

const deleteCat = async (antry) => {
  try {
    let {
      body: { vTopGainId },
    } = antry;

    let condition = {
      _id: new ObjectId(vTopGainId),
      isDeleted: false,
    };

    let updateData = {
      isDeleted: true,
    };

    let deleteTopStock = await dbService.findOneAndUpdateRecord(
      "TopGainLoserModel",
      condition,
      updateData,
      {
        returnOriginal: false,
      },
      {
        isDeleted: 1,
      }
    );
    if (!deleteTopStock) throw new Error(Message.userNotFound);

    return deleteTopStock;
  } catch (error) {
    console.error("deleteCat ----------->", error);
    throw new Error(error?.message);
  }
};

module.exports = deleteCat;
