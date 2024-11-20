const ObjectId = require("mongodb").ObjectId;
const dbService = require("../../utils/dbService");
const Message = require("../../utils/messages");

const listCat = async (entry) => {
  try {
    let {
      body: { vCatId, iPage, iLimit },
    } = entry;




    // return "";
    let filter = {
      isDeleted: false,
    };


    if (vCatId) {
      filter["vCatId"] = new ObjectId(vCatId);

      let aggregateQuery = [
        {
          $match: filter,
        },
        {
          $project: {
            _id: 1,
            vFrameName: 1,
            vThumbImage: 1,
            vOriginalImage: 1,
            vDiscription: 1,
            dtCreatedAt: 1,
            isPremium: 1,
          },
        },
        { $skip: (iPage - 1) * iLimit },
        { $limit: iLimit },
        { $sort: { _id: -1 } },
      ];

      let dataList = await dbService.aggregateData("FrameModel", aggregateQuery);

      let totalCount = await dbService.recordsCount("FrameModel", filter);
      if (!dataList) throw new Error(Message.systemError);
      return { data: dataList, iCount: totalCount };
    }







  } catch (error) {
    console.error("listDrCat ----------->", error);
    throw new Error(error?.message);
  }
};

module.exports = listCat;
