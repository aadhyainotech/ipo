const ObjectId = require("mongodb").ObjectId;
const dbService = require("../../utils/dbService");
const Message = require("../../utils/messages");

const deleteCat = async (antry) => {
  try {
    let {
      body: { vIpoId },
    } = antry;

    let condition = {
      _id: new ObjectId(vIpoId),
      isDeleted: false,
    };

    let updateData = {
      isDeleted: true,
    };

    let deleteIpo = await dbService.findOneAndUpdateRecord(
      "IpoModel",
      condition,
      updateData,
      {
        returnOriginal: false,
      },
      {
        isDeleted: 1,
      }
    );
    if (!deleteIpo) throw new Error(Message.userNotFound);

    return deleteIpo;
  } catch (error) {
    console.error("delete ----------->", error);
    throw new Error(error?.message);
  }
};

module.exports = deleteCat;
