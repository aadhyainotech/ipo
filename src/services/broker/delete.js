const ObjectId = require("mongodb").ObjectId;
const dbService = require("../../utils/dbService");
const Message = require("../../utils/messages");

const deleteCat = async (antry) => {
  try {
    let {
      body: { vBrokerId },
    } = antry;

    let condition = {
      _id: new ObjectId(vBrokerId),
      isDeleted: false,
    };

    let updateData = {
      isDeleted: true,
    };

    let deleteBroker = await dbService.findOneAndUpdateRecord(
      "BrokerModel",
      condition,
      updateData,
      {
        returnOriginal: false,
      },
      {
        isDeleted: 1,
      }
    );
    if (!deleteBroker) throw new Error(Message.userNotFound);

    return deleteBroker;
  } catch (error) {
    console.error("deleteCat ----------->", error);
    throw new Error(error?.message);
  }
};

module.exports = deleteCat;
