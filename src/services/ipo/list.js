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
          vOfferPrice: 1,
          vLotSize: 1,
          vOpanDate: 1,
          vCloseDate: 1,
          vAllotmentDate: 1,
          vRefundsDate: 1,
          vDematTransferDate: 1,
          vListingDate: 1,
          vAboutCompany: 1,
          vName: 1,
          vImage: 1,
          vAddress: 1,
          vMobile: 1,
          vEmail: 1,
          vWebsite: 1,
          arrGmp: 1,
          arrLotSize: 1,
          arrSubscription: 1,
        },
      },
      { $sort: { _id: -1 } },
    ];

    let dataList = await dbService.aggregateData("IpoModel", aggregateQuery);
    let totalCount = await dbService.recordsCount("IpoModel", filter);
    // if (!dataList) throw new Error(Message.systemError);

    return { data: dataList, iCount: totalCount };
  } catch (error) {
    console.error("listDrCat ----------->", error);
    throw new Error(error?.message);
  }
};

module.exports = list;
