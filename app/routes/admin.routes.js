const router = require("express").Router();
const adminController = require("../controllers/admin.controller");

router.get("/", adminController.getAll);
router.get("/:id", adminController.getSingleUser);
router.post("/", adminController.create);
router.put("/:id", adminController.update);
router.delete("/:id", adminController.deleteUser);

module.exports = router;
