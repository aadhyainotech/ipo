const ObjectId = require("mongodb").ObjectId;
const dbService = require("../../utils/dbService");
const Message = require("../../utils/messages");

// import { UserRole } from "../../config/constants";

const saveFont = async (entry) => {
  try {
    let {
      user: { _id: userId },
      body: { },
      files,
    } = entry;

    // console.log(files);


    files.forEach(async element => {

      let checkData = await dbService.findOneRecord("FontModel", { vFontUrl: "font/" + element.filename }, {
        _id: 1,
      });
      if (!checkData) {
        const saveData = await dbService.createOneRecord("FontModel", {
          vFontUrl: "font/" + element.filename
        });
        if (!saveData) throw new Error(Message.systemError);
      }


    });





    // let length = checkData.length;
    // let thumbImage = "";
    // let newFont = [];
    // if (files.length >= 0) {
    //   for (let i = 0; i < files.length; i++) {
    //     const element = files[i];

    //     let newObj = { vFontUrl: "font/" + element.filename }
    //     newFont.push(newObj)
    //   }
    // }







    return saveData;
    // let filter = {
    //   isDeleted: false,
    // };

    // let checkData = await dbService.findOneRecord("FrameModel", filter, {
    //   _id: 1,
    // });
    // if (checkData) throw new Error(Message.recordNotFound);

    // const saveData = await dbService.createOneRecord("FrameModel", {
    //   vFrameName,
    //   vCatId,
    //   vThumbImage: thumbImage,
    //   vOriginalImage: originalImage,
    //   dtCreatedAt: Date.now(),
    // });
    // if (!saveData) throw new Error(Message.systemError);

    return { thumbImage: thumbImage, originalImage: originalImage };
  } catch (error) {
    console.error("saveDrCat ----------->", error);
    throw new Error(error?.message);
  }
};

module.exports = saveFont;
