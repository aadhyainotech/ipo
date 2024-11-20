const ObjectId = require("mongodb").ObjectId;
const dbService = require("../../utils/dbService");
const Message = require("../../utils/messages");
// import { imageUpload } from "../../utils/imageUpload";

const update = async (entry) => {
  try {
    let {
      body: {
        vIpoId,
        vOfferPrice,
        vLotSize,
        vOpanDate,
        vCloseDate,
        vAllotmentDate,
        vRefundsDate,
        vDematTransferDate,
        vListingDate,
        vAboutCompany,
        vName,
        vImage,
        vAddress,
        vMobile,
        vEmail,
        vWebsite,
        arrGmp,
        arrLotSize,
        arrSubscription,
      },
    } = entry;

    let condition = {
      _id: new ObjectId(vIpoId),
      isDeleted: false,
    };

    let userData = await dbService.findOneRecord("IpoModel", condition, {
      _id: 1,
    });
    if (!userData) throw new Error(Message.userNotFound);

    let updateData = {
      vOfferPrice,
      vLotSize,
      vOpanDate,
      vCloseDate,
      vAllotmentDate,
      vRefundsDate,
      vDematTransferDate,
      vListingDate,
      vAboutCompany,
      vName,
      vImage,
      vAddress,
      vMobile,
      vEmail,
      vWebsite,
      arrGmp,
      arrLotSize,
      arrSubscription,
      isUpdatedAt: Date.now(),
    };

    let updateDrCat = await dbService.findOneAndUpdateRecord(
      "IpoModel",
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
