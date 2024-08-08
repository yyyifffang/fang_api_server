const express = require("express");
const router = express.Router();

let models = [
  {
    id: 1,
    uid: "a722ed3a-6979-db18-a65a-bf764ced6ccb",
    created_time: "2024-05-10 21:17:54",
    name: "UAV路徑預測 Model 1",
    description: "models description",
    f_application_uid: "3d064139-bad9-a033-5e89-960948ff9c17", //UAV路徑預測 application 1
  },
  {
    id: 2,
    uid: "5030a99a-b15f-8e0d-b6cf-10a85ba95781",
    created_time: "2024-05-10 21:17:54",
    name: "UAV路徑預測 Model 2",
    description: " task description",
    f_application_uid: "3d064139-bad9-a033-5e89-960948ff9c17", //UAV路徑預測 application 1
  },
  {
    id: 3,
    uid: "46a2ac1d-75b3-8e95-c71a-e4bbf2788a56",
    created_time: "2024-05-10 21:17:54",
    name: "AI數據分析 Model 1",
    description: " task description",
    f_application_uid: "17c8f0e6-ad1a-673c-4797-a2c252f5af86", //AI數據分析 application 1
  },
  {
    id: 4,
    uid: "20381890-d12c-9196-6a47-97483dc0d050",
    created_time: "2024-05-10 21:17:54",
    name: "AI數據分析Model 2",
    description: " task description",
    f_application_uid: "17c8f0e6-ad1a-673c-4797-a2c252f5af86", //AI數據分析 application 1
  },
];

// 取得models
router.post("/getModels", (req, res) => {
  const { uid } = req.body;

  const filteredModels = models.filter(
    (model) => model.f_application_uid === uid
  );

  if (filteredModels.length > 0) {
    res.json(filteredModels);
  } else {
    res.status(404).json({ message: "Models not found" });
  }
});

// 更新model
router.post("/updateModel", (req, res) => {
  const { uid, name, description } = req.body;

  let model = models.find((m) => m.uid === uid);

  if (model) {
    model.name = name || model.name;
    model.description = description || model.description;

    res.json({ message: "Model updated successfully", model });
  } else {
    res.status(404).json({ message: "Model not found" });
  }
});

// 刪除model
router.post("/deleteModel", (req, res) => {
  const { uid } = req.body;
  const modelIndex = models.findIndex((m) => m.uid === uid);

  if (modelIndex !== -1) {
    models.splice(modelIndex, 1);
    res.json({ message: "Model deleted successfully" });
  } else {
    res.status(404).json({ message: "Model not found" });
  }
});

module.exports = router;
