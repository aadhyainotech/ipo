const ObjectId = require("mongodb").ObjectId;
const dbService = require("../../utils/dbService");
const Message = require("../../utils/messages");
// import { imageUpload } from "../../utils/imageUpload";

const update = async (entry) => {
  try {
    let {
      body: { vCatId, vName },
      file
    } = entry;


    // let vImages = "";
    // if (Object.keys(file).length) {
    //   vImages = "images/" + file.filename;
    // }
    let condition = {
      _id: new ObjectId(vCatId),
      isDeleted: false,
    };

    let userData = await dbService.findOneRecord("CategoryModel", condition, {
      _id: 1,
    });
    if (!userData) throw new Error(Message.userNotFound);

    let updateData = {
      vName,
      isUpdatedAt: Date.now(),
    };

    let updateDrCat = await dbService.findOneAndUpdateRecord(
      "CategoryModel",
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
