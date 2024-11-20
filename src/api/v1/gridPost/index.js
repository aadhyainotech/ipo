const { Router } = require("express");
// const userAuthentication = require("../../../middleware/authentication/userAuthentication");
const commonResolver = require("../../../utils/commonResolver");

const multer = require("multer");

const storageEngine = multer.diskStorage({
  destination: "./public/images",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}--${file.originalname}`);
  },
});

const upload = multer({
  storage: storageEngine,
});

// SCHEMA
const saveSchema = require("./save");
const listSchema = require("./list");
const updateSchema = require("./update");
const deleteSchema = require("./delete");
// services
const save = require("../../../services/gridPost/save");
const list = require("../../../services/gridPost/list");
const update = require("../../../services/gridPost/update");
const deleteGridPost = require("../../../services/gridPost/delete");

// const userAuthentication = require("../../../middleware/authentication/userAuthentication");
const router = new Router();

// SERVICES

// import { acceptSeva } from "../../../services/seva/acceptSeva";

router.post(
  "/details",
  upload.single("vImage"),
  commonResolver.bind({
    modelService: save,
    isRequestValidateRequired: true,
    schemaValidate: saveSchema,
  })
);

router.post(
  "/list",
  commonResolver.bind({
    modelService: list,
    isRequestValidateRequired: true,
    schemaValidate: listSchema,
  })
);

router.put(
  "/details",
  // upload.single("vBannerImg"),
  commonResolver.bind({
    modelService: update,
    isRequestValidateRequired: true,
    schemaValidate: updateSchema,
  })
);
router.delete(
  "/details",
  commonResolver.bind({
    modelService: deleteGridPost,
    isRequestValidateRequired: true,
    schemaValidate: deleteSchema,
  })
);

module.exports = router;
