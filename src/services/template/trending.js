const ObjectId = require("mongodb").ObjectId;
const dbService = require("../../utils/dbService");
const Message = require("../../utils/messages");

const listTrending = async (entry) => {
  try {
    let {
      body: { },
    } = entry;




    // return "";
    let filter = {
      isDeleted: false,
      isTrending: true,
    };


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
          isTrending: 1,
          isPremium: 1,
        },
      },
      { $sort: { _id: -1 } },
    ];

    let dataList = await dbService.aggregateData("FrameModel", aggregateQuery);
    return dataList;





  } catch (error) {
    console.error("listDrCat ----------->", error);
    throw new Error(error?.message);
  }
};

module.exports = listTrending;
