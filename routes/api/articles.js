const router = require("express").Router();
const articleController = require("../../controllers/articleController");

// Matches with "/api/messages"
router
  .route("/")
  .get(articleController.findAll)
  .post(articleController.create);

// Matches with "/api/messages/:id"
router
  .route("/:id")
  .get(articleController.findById)
  .put(articleController.update)
  .delete(articleController.remove);

module.exports = router;
