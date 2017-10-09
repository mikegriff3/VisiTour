const router = require("express").Router();
const controller = require("../controller/mapController");

// router.get("/getRoutes", controller.getRoutes);
router.post("/saveRoutes", controller.saveRoutes);
// export
module.exports = router;
