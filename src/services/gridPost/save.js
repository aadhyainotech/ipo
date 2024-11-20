const ObjectId = require("mongodb").ObjectId;
const dbService = require("../../utils/dbService");
const Message = require("../../utils/messages");

const save = async (antry) => {
  try {
    let {
      body: { vGrid },
      file,
    } = antry;

    console.log(file);

    let image = "";
    if (Object.keys(file).length) {
      image = "images/" + file.filename;
    }

    let addbBanner = await dbService.createOneRecord("GridPostModel", {
      vImage: image,
      vGrid,
      dtCreatedAt: Date.now(),
    });

    if (!addbBanner) throw new Error(Message.systemError);
    return addbBanner;
  } catch (error) {
    console.error("addBannerError ----------->", error);
    throw new Error(error?.message);
  }

  // 9978812580
};

module.exports = save;
