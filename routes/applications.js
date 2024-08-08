const express = require("express");
const router = express.Router();

let applications = [
  {
    id: 1,
    uid: "3d064139-bad9-a033-5e89-960948ff9c17",
    created_time: "2024-05-10 21:17:54",
    name: "UAV路徑預測 application 1",
    description: "application description",
    f_project_uid: "9d55a897-5b54-cdd2-8674-73484212e0b2", //UAV路徑預測
    f_agent_uid: " ",
  },
  {
    id: 2,
    uid: "17c8f0e6-ad1a-673c-4797-a2c252f5af86",
    created_time: "2024-06-10 21:17:55",
    name: "AI數據分析 application 1",
    description: "application description",
    f_project_uid: "d1686018-45a0-98fa-6be6-5e4e58eac6ea", //AI數據分析
    f_agent_uid: " ",
  },
  {
    id: 3,
    uid: "45320cae-238f-425c-aeed-56bd029958d1",
    created_time: "2024-05-10 21:17:54",
    name: "UAV路徑預測 application 2",
    description: "application description",
    f_project_uid: "9d55a897-5b54-cdd2-8674-73484212e0b2", //UAV路徑預測
    f_agent_uid: " ",
  },
];

// 取得applications
router.post("/getApplications", (req, res) => {
  const { uid } = req.body;

  const filteredApplications = applications.filter(
    (application) => application.f_project_uid === uid
  );

  if (filteredApplications.length > 0) {
    res.json(filteredApplications);
  } else {
    res.status(404).json({ message: "Applications not found" });
  }
});

// 更新application
router.post("/updateApplication", (req, res) => {
  const { uid, name, description } = req.body;
  let application = applications.find((a) => a.uid === uid);
  if (application) {
    application.name = name || application.name;
    application.description = description || application.description;

    res.json({ message: "Application updated successfully", application });
  } else {
    res.status(404).json({ message: "Application not found" });
  }
});

// 刪除application
router.post("/deleteApplication", (req, res) => {
  const { uid } = req.body;
  const applicationIndex = applications.findIndex((a) => a.uid === uid);
  if (applicationIndex !== -1) {
    applications.splice(applicationIndex, 1);
    res.json({ message: "Application deleted successfully" });
  } else {
    res.status(404).json({ message: "Application not found" });
  }
});

module.exports = router;
