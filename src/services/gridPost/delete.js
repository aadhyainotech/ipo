const ObjectId = require("mongodb").ObjectId;
const dbService = require("../../utils/dbService");
const Message = require("../../utils/messages");

const deleteGridPost = async (antry) => {
  try {
    let {
      body: { vGridPostId },
    } = antry;

    let filter = {
      _id: new ObjectId(vGridPostId),
      isDeleted: false,
    };

    let banner = await dbService.findOneRecord("GridPostModel", filter);

    if (!banner) throw new Error(Message.recordNotFound);

    let condition = {
      _id: new ObjectId(vGridPostId),
      isDeleted: false,
    };

    let updateData = { isDeleted: true };

    // if (vArrPosition) {
    //   let bannerarr = banner.arrBannerImg;

    //   let newArrBanner = bannerarr.splice(vArrPosition, 1);

    //   updateData["arrBannerImg"] = newArrBanner;
    // } else {
    //   updateData["isDeleted"] = true;
    // }

    let bannerDelete = await dbService.findOneAndUpdateRecord(
      "GridPostModel",
      condition,
      updateData,
      {
        returnOriginal: false,
      }
    );

    if (!bannerDelete) throw new Error(Message.recordNotFound);
    return bannerDelete;
  } catch (error) {
    console.error("deleteError ----------->", error);
    throw new Error(error?.message);
  }
};

module.exports = deleteGridPost;
