const { Router } = require("express");

// Start Permission Middleware//
// const userAuthentication = require("../../middleware/authentication/userAuthentication");

// End Permission Middleware //

const categoryRouter = require("./category");
const frameRouter = require("./template");
const gridPostRouter = require("./gridPost");
const adsRouter = require("./ads");
const addImageRouter = require("./addImage");
const addFontRouter = require("./addFont");
const holidayRouter = require("./holiday");
const brokerRouter = require("./broker");
const topGainRouter = require("./topGainLoser");
const ipoRouter = require("./ipo");
const stockAnalysisRouter = require("./stockAnalysis");

const app = Router();

/*********** Combine all Routes ********************/

app.use("/category", categoryRouter);
app.use("/template", frameRouter);
app.use("/gridPost", gridPostRouter);
app.use("/ads", adsRouter);
app.use("/addImage", addImageRouter);
app.use("/addFont", addFontRouter);
app.use("/holiday", holidayRouter);
app.use("/broker", brokerRouter);
app.use("/topGain", topGainRouter);
app.use("/ipo", ipoRouter);
app.use("/stockAnalysis", stockAnalysisRouter);

module.exports = app;
