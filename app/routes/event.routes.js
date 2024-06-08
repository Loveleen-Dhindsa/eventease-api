const router = require("express").Router();
const eventController = require("../controllers/event.controller");

router.post("/", eventController.create);
router.get("/", eventController.getAll);
router.get("/:id", eventController.getSingle);
router.put("/:id", eventController.update);
router.delete("/:id", eventController.deleteEvent);

module.exports = router;

