const ObjectId = require("mongodb").ObjectId;
const dbService = require("../../utils/dbService");
const Message = require("../../utils/messages");

// import { UserRole } from "../../config/constants";

const saveFrame = async (entry) => {
  try {
    let {
      user: { _id: userId },
      body: {},
      file,
    } = entry;

    // console.log(files);
    // let thumbImage = "";
    // let originalImage = "";
    // if (Object.keys(files).length) {
    //   if (files.vThumbImage && Object.keys(files.vThumbImage[0]).length > 0) {
    //     thumbImage = "images/" + files.vThumbImage[0].filename;
    //   }
    //   if (
    //     files.vOriginalImage &&
    //     Object.keys(files.vOriginalImage[0]).length > 0
    //   ) {
    //     originalImage = "images/" + files.vOriginalImage[0].filename;
    //   }
    // }
    console.log(file);
    let vImage = "";
    if (Object.keys(file).length) {
      vImage = "images/" + file.filename;
    }

    return { vImage: vImage };

    // return { thumbImage: thumbImage, originalImage: originalImage };
  } catch (error) {
    console.error("saveDrCat ----------->", error);
    throw new Error(error?.message);
  }
};

module.exports = saveFrame;
