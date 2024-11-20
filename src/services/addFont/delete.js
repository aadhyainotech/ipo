const ObjectId = require("mongodb").ObjectId;
import Message from "../../utils/messages";
import dbService from "../../utils/dbService";
const fs = require('fs');


const deleteFont = async (antry) => {
  try {
    let {
      body: { vFontId },
    } = antry;

    let filter = {
      _id: new ObjectId(vFontId),
      isDeleted: false,
    };

    let frame = await dbService.findOneRecord("FontModel", filter);

    if (!frame) throw new Error(Message.recordNotFound);

    let condition = {
      _id: new ObjectId(vFontId),
      isDeleted: false,
    };

    let updateData = { isDeleted: true };



    let frameDelete = await dbService.findOneAndUpdateRecord(
      "FontModel",
      condition,
      updateData,
      {
        returnOriginal: false,
      }
    );

    if (!frameDelete) throw new Error(Message.recordNotFound);




    fs.unlink(`public/${frameDelete.vFontUrl}`, function (err) {
      //Do whatever else you need to do here
    });

    return {};
  } catch (error) {
    console.error("deleteFrameError ----------->", error);
    throw new Error(error?.message);
  }
};

module.exports = deleteFont;
