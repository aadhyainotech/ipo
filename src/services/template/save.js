const ObjectId = require("mongodb").ObjectId;
const dbService = require("../../utils/dbService");
const Message = require("../../utils/messages");

// import { UserRole } from "../../config/constants";

const save = async (entry) => {
  try {
    let {
      user: { _id: userId },
      body: { vCatId, isTrending, isPremium },
      files
    } = entry;


    let thumbImage = "";
    let originalImage = "";
    if (Object.keys(files).length) {
      if (files.vThumbImage && Object.keys(files.vThumbImage[0]).length > 0) {
        thumbImage = "images/" + files.vThumbImage[0].filename;
      }
      if (
        files.vOriginalImage && Object.keys(files.vOriginalImage[0]).length > 0
      ) {
        originalImage = "images/" + files.vOriginalImage[0].filename;
      }
    }
    // let filter = {
    //   isDeleted: false,
    // };

    // let checkData = await dbService.findOneRecord("FrameModel", filter, {
    //   _id: 1,
    // });
    // if (checkData) throw new Error(Message.recordNotFound);

    const saveData = await dbService.createOneRecord("FrameModel", {
      vCatId,
      vThumbImage: thumbImage,
      isTrending,
      isPremium,
      vOriginalImage: originalImage,
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
