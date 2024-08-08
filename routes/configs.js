const express = require("express");
const router = express.Router();

let configs = [
  {
    id: 1,
    uid: "0ce9cae4-c367-7d64-e662-7137b4425d96",
    created_time: "2024-05-10 21:17:54",
    name: "UAV路徑預測 preprocessing config 1",
    description: "preprocessing config description",
    type: "preprocessing",
    f_pipeline_uid: "39ea45ea-fab1-ba4d-1057-79fc317917a6", //UAV路徑預測 preprocessing pipeline 1
  },
  {
    id: 2,
    uid: "cd48f541-951f-d102-ee6b-f5acc200e3fc",
    created_time: "2024-05-10 21:17:54",
    name: "UAV路徑預測 preprocessing config 2",
    description: "preprocessing config description",
    type: "preprocessing",
    f_pipeline_uid: "39ea45ea-fab1-ba4d-1057-79fc317917a6", //UAV路徑預測 preprocessing pipeline 1
  },
  {
    id: 3,
    uid: "5a2f60cc-c741-f7ed-b4e3-051a736ff1ea",
    created_time: "2024-05-10 21:17:54",
    name: "UAV路徑預測 training config 1",
    description: "training config description",
    type: "training",
    f_pipeline_uid: "6ef6bf11-aefe-8439-5c4d-c23b1247357f", //UAV路徑預測 training pipeline 1
  },
  {
    id: 4,
    uid: "ea12b353-67b6-8939-3df9-126a1dbf532b",
    created_time: "2024-05-10 21:17:54",
    name: "UAV路徑預測 training config 2",
    description: "training config description",
    type: "training",
    f_pipeline_uid: "6ef6bf11-aefe-8439-5c4d-c23b1247357f", //UAV路徑預測 training pipeline 1
  },
  {
    id: 5,
    uid: "c87aacf0-979d-f073-df3f-dec424398f7f",
    created_time: "2024-05-10 21:17:54",
    name: "AI數據分析 preprocessing config 1",
    description: "preprocessing config description",
    type: "preprocessing",
    f_pipeline_uid: "da1f92fa-0871-fa0c-85f8-a8e9f192b918", //AI數據分析 preprocessing pipeline 1
  },
  {
    id: 6,
    uid: "439edd9f-991e-0be3-c7c8-8d1f8afa1189",
    created_time: "2024-05-10 21:17:54",
    name: "AI數據分析 preprocessing config 2",
    description: "preprocessing config description",
    type: "preprocessing",
    f_pipeline_uid: "da1f92fa-0871-fa0c-85f8-a8e9f192b918", //AI數據分析 preprocessing pipeline 1
  },
  {
    id: 7,
    uid: "f2466ace-8d01-df7c-4cc7-533621c96abe",
    created_time: "2024-05-10 21:17:54",
    name: "AI數據分析 training config 1",
    description: "training config description",
    type: "training",
    f_pipeline_uid: "8dd11e37-1b7e-cf24-71f2-5d8d7d058f31", //AI數據分析 training pipeline 1
  },
  {
    id: 8,
    uid: "5a89efa3-3a77-4ede-5133-ef555928d4aa",
    created_time: "2024-05-10 21:17:54",
    name: "AI數據分析 training config 2",
    description: "training config description",
    type: "training",
    f_pipeline_uid: "8dd11e37-1b7e-cf24-71f2-5d8d7d058f31", //AI數據分析 training pipeline 1
  },
];

// 取得configs
router.post("/getConfigs", (req, res) => {
  const { uid, type } = req.body;
  const filteredConfigs = configs.filter(
    (config) => config.f_pipeline_uid === uid && config.type === type
  );

  if (filteredConfigs.length > 0) {
    res.json(filteredConfigs);
  } else {
    res.status(404).json({ message: "Configs not found" });
  }
});

// 更新config
router.post("/updateConfig", (req, res) => {
  const { uid, name, description } = req.body;

  let config = configs.find((c) => c.uid === uid);

  if (config) {
    config.name = name || config.name;
    config.description = description || config.description;

    res.json({ message: "Config updated successfully", config });
  } else {
    res.status(404).json({ message: "Config not found" });
  }
});

// 刪除config
router.post("/deleteConfig", (req, res) => {
  const { uid } = req.body;

  const configIndex = configs.findIndex((c) => c.uid === uid);

  if (configIndex !== -1) {
    configs.splice(configIndex, 1);
    res.json({ message: "Config deleted successfully" });
  } else {
    res.status(404).json({ message: "Config not found" });
  }
});

module.exports = router;
