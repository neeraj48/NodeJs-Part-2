const express = require("express");
const { asyncHandler } = require("../middleware/errorHandler");
const router = express.Router();

const items = [
  { id: 1, name: "Item 1", description: "Description for Item 1" },
  { id: 2, name: "Item 2", description: "Description for Item 2" },
  { id: 3, name: "Item 3", description: "Description for Item 3" },
];

// GET all items
router.get(
  "/items",
  asyncHandler(async (req, res) => {
    res.json(items);
  }),
);

module.exports = router;
