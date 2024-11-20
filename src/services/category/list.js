const ObjectId = require("mongodb").ObjectId;
const dbService = require("../../utils/dbService");
const Message = require("../../utils/messages");

const listCat = async (entry) => {
  try {
    let {
      body: { vCatId },
    } = entry;

    let filter = {
      isDeleted: false,
      // vlanguageId: new ObjectId(vlanguageId)
    };

    if (vCatId) {
      vCatId["filter"] = vCatId
    }



    let aggregateQuery = [
      {
        $match: filter,
      },
      {
        $project: {
          _id: 1,
          vName: 1,
          vIcon: 1,
          vStartColor: 1,
          vEndColor: 1,
        },
      },
      { $sort: { _id: 1 } },
    ];

    let dataList = await dbService.aggregateData("CategoryModel", aggregateQuery);
    let totalCount = await dbService.recordsCount("CategoryModel", filter);
    if (!dataList) throw new Error(Message.systemError);

    return { data: dataList, iCount: totalCount };
  } catch (error) {
    console.error("listDrCat ----------->", error);
    throw new Error(error?.message);
  }
};


module.exports = listCat
