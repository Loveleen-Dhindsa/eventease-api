const router = require("express").Router();
const adminController = require("../controllers/admin.controller");

router.get("/", adminController.getAll);
router.get("/events", adminController.getAllEvents);
router.get("/contacts", adminController.getAllContacts);
router.get("/bookings", adminController.getAllBookings);
router.get("/feedback", adminController.getAllFeedback);
router.post("/events", adminController.createEvent);
router.post("/", adminController.create);
router.post("/signup", adminController.signup);
router.post("/login", adminController.login);
router.get("/:id", adminController.getSingleUser);
router.put("/:id", adminController.update);
router.delete("/:id", adminController.deleteUser);
router.get("/contacts/:id", adminController.getSingleContact);
router.delete("/contacts/:id", adminController.deleteContact);
router.get("/feedback/:id", adminController.getSingleFeedback);
router.delete("/feedback/:id", adminController.deleteFeedback);
router.get("/:id/events", adminController.getSingleEvent);
router.delete("/:id/events", adminController.deleteEvent);
router.put("/:id/events", adminController.updateEvent);
router.get("/bookings/:id", adminController.getSingleBooking);
router.delete("/bookings/:id", adminController.deleteBooking);

module.exports = router;
