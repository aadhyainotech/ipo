const ObjectId = require("mongodb").ObjectId;
const dbService = require("../../utils/dbService");
const Message = require("../../utils/messages");

const list = async (entry) => {
  try {
    let {
      body: { isStatus },
    } = entry;

    let filter = {
      isDeleted: false,
      isStatus: isStatus,
    };

    let aggregateQuery = [
      {
        $match: filter,
      },
      {
        $project: {
          _id: 1,
          arrHoliday: 1,
          vYear: 1,
          isStatus: 1,
        },
      },
      { $sort: { _id: -1 } },
    ];

    let dataList = await dbService.aggregateData(
      "HolidayModel",
      aggregateQuery
    );
    // let totalCount = await dbService.recordsCount("HolidayModel", filter);
    // if (!dataList) throw new Error(Message.systemError);

    return dataList;
  } catch (error) {
    console.error("listDrCat ----------->", error);
    throw new Error(error?.message);
  }
};

module.exports = list;
