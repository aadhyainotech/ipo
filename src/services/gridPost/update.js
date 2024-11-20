const ObjectId = require("mongodb").ObjectId;
const dbService = require("../../utils/dbService");
const Message = require("../../utils/messages");
const fs = require('fs');
const update = async (antry) => {
  try {
    let {
      body: { vGridPostId, vGrid },
      file,
    } = antry;

    // const bannerImage = await imageUpload(file);
    let filter = {
      _id: new ObjectId(vGridPostId),
    };

    let bannerCheck = await dbService.findOneRecord("GridPostModel", filter, {
      _id: 1,
      vGrid: 1,
    });

    if (!bannerCheck) throw new Error(Message.recordNotFound);
    // let bannerimage = "";
    // if (Object.keys(file).length) {
    //   bannerimage = "images/" + file.filename;
    // }

    let condition = {
      _id: new ObjectId(vGridPostId),
    };

    let updateData = {
      vGrid,
      dtUpdatedAt: Date.now(),
      isUpdated: true,
    };
    let addbBanner = await dbService.findOneAndUpdateRecord(
      "GridPostModel",
      condition,
      updateData,
    );


    // let newString = addbBanner.vBannerImg.replace("images/", "");


    // fs.unlinkSync("public/images/" + newString);
    // console.log('File is deleted.');

    if (!addbBanner) throw new Error(Message.systemError);
    return {};
  } catch (error) {
    console.error("updateBannerError ----------->", error);
    throw new Error(error?.message);
  }
};

module.exports = update;
