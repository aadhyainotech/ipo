const ObjectId = require("mongodb").ObjectId;
const dbService = require("../../utils/dbService");
const Message = require("../../utils/messages");
// import { imageUpload } from "../../utils/imageUpload";

const update = async (entry) => {
  try {
    let {
      body: { vBrokerId, arrBroker, vYear },
    } = entry;


    let condition = {
      _id: new ObjectId(vBrokerId),
      isDeleted: false,
    };

    let userData = await dbService.findOneRecord("BrokerModel", condition, {
      _id: 1,
    });
    if (!userData) throw new Error(Message.userNotFound);

    let updateData = {
      arrBroker,
      isUpdatedAt: Date.now(),
    };

    if (vYear) {
      updateData["vYear"] = vYear
    }


    let update = await dbService.findOneAndUpdateRecord(
      "BrokerModel",
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
