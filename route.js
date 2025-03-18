const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.post("/", controller.postProduct);
router.get("/", controller.getProduct);
router.get("/:id", controller.getProductId);
router.patch("/:id", controller.updateProduct);
router.delete("/:id", controller.deleteProduct);

module.exports = router;
