const ObjectId = require("mongodb").ObjectId;
const dbService = require("../../utils/dbService");
const Message = require("../../utils/messages");

const list = async (antry) => {
  try {
    let {
      body: { vGridPostId },
    } = antry;
    let filter = {
      isDeleted: false,
    };

    if (vGridPostId) {
      filter._id = new ObjectId(vGridPostId);
    }

    let aggregateQuery = [
      {
        $match: filter,
      },
      {
        $project: {
          _id: 1,
          vImage: 1,
          vGrid: 1,
        },
      },
      {
        $sort: { _id: -1 },
      },
    ];

    let businessList = await dbService.aggregateData(
      "GridPostModel",
      aggregateQuery
    );
    if (!businessList) throw new Error(Message.noDataAvailable);

    let businessCount = await dbService.recordsCount("GridPostModel", filter);
    return { data: businessList, iCount: businessCount };
  } catch (error) {
    console.error("viewBannerError  ----------->", error);
    throw new Error(error?.message);
  }
};

module.exports = list;
