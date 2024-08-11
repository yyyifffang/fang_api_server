const express = require("express");
const router = express.Router();

let organization = {
  uid: "2df56c65-6168-7e62-e974-2d916bd56e23",
  created_time: "2024-05-10 21:17:54",
  name: "NTUST",
  description: "organization description",
};

// 取得organization
router.post("/getOrganization", (req, res) => {
  res.json(organization);
});

module.exports = router;
