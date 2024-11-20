const ObjectId = require("mongodb").ObjectId;
const dbService = require("../../utils/dbService");
const Message = require("../../utils/messages");

const listCat = async (entry) => {
  try {
    let {
      body: { vCatId, vTime },
    } = entry;
    // let dateObject = new Date(vTime);
    let DateTime = new Date(vTime).getTime();

    console.log("dateObject------------------->", dateObject);
    console.log("dateTime------------------->", DateTime);
    console.log("test-------->", new Date(DateTime));
    // let DateTime = new Date(vTime);
    // if (vTime) {
    //   let dateObject = new Date(vTime);
    //   let dateTime = dateObject.setSeconds(dateObject.getSeconds() + 1);
    // console.log("dateObject------------------->", dateObject);
    // console.log("dateTime------------------->", dateTime);
    // console.log("test-------->",  new Date(dateTime));
    // }

      console.log("current Date------->" ,Date.now());



    // return "";
    let filter = {
      isDeleted: false,
    };

    if (vTime) {
      filter["dtCreatedAt"] = { $gte: DateTime };
    }

    if (vCatId) {
      filter["vCatId"] = new ObjectId(vCatId);
    }

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
          dtCreatedAt: 1,
        },
      },
      { $sort: { _id: -1 } },
    ];

    let dataList = await dbService.aggregateData("FrameModel", aggregateQuery);

    console.log(dataList);
    let totalCount = await dbService.recordsCount("FrameModel", filter);
    if (!dataList) throw new Error(Message.systemError);

    return { data: dataList, iCount: totalCount };
  } catch (error) {
    console.error("listDrCat ----------->", error);
    throw new Error(error?.message);
  }
};

module.exports = listCat;
