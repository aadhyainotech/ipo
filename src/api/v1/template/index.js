const { Router } = require("express");
const commonResolver = require("../../../utils/commonResolver");
// const userAuthentication = require("../../../middleware/authentication/userAuthentication");
const router = new Router();
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

// SERVICES
const save = require("../../../services/template/save");
const listCat = require("../../../services/template/list");
const update = require("../../../services/template/update");
const deleteImage = require("../../../services/template/delete");
const listTrending = require("../../../services/template/trending");

router.post(
  "/details",
  upload.fields([{ name: "vThumbImage" }, { name: "vOriginalImage" }]),
  commonResolver.bind({
    modelService: save,
    isRequestValidateRequired: true,
    schemaValidate: saveSchema,
  })
);

router.post(
  "/frameBycatId",
  commonResolver.bind({
    modelService: listCat,
    isRequestValidateRequired: true,
    schemaValidate: listSchema,
  })
);

router.put(
  "/details",
  commonResolver.bind({
    modelService: update,
    isRequestValidateRequired: true,
    schemaValidate: updateSchema,
  })
);

router.delete(
  "/details",
  commonResolver.bind({
    modelService: deleteImage,
    isRequestValidateRequired: true,
    schemaValidate: deleteSchema,

  })
);

router.get(
  "/trending",
  commonResolver.bind({
    modelService: listTrending,
    isRequestValidateRequired: false,
    // schemaValidate: deleteSchema,

  })
);

module.exports = router;
