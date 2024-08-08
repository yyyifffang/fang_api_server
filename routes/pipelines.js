const express = require("express");
const router = express.Router();

let pipelines = [
  {
    id: 1,
    uid: "39ea45ea-fab1-ba4d-1057-79fc317917a6",
    created_time: "2024-05-10 21:17:54",
    name: "UAV路徑預測 preprocessing pipeline 1",
    description: "preprocessing pipeline description",
    type: "preprocessing",
    f_application_uid: "3d064139-bad9-a033-5e89-960948ff9c17", //UAV路徑預測 application 1
  },
  {
    id: 2,
    uid: "6ef6bf11-aefe-8439-5c4d-c23b1247357f",
    created_time: "2024-05-10 21:17:54",
    name: "UAV路徑預測 training pipeline 1",
    description: "training pipeline description",
    type: "training",
    f_application_uid: "3d064139-bad9-a033-5e89-960948ff9c17", //UAV路徑預測 application 1
  },
  {
    id: 3,
    uid: "da1f92fa-0871-fa0c-85f8-a8e9f192b918",
    created_time: "2024-05-10 21:17:54",
    name: "AI數據分析 preprocessing pipeline 1",
    description: "preprocessing pipeline description",
    type: "preprocessing",
    f_application_uid: "17c8f0e6-ad1a-673c-4797-a2c252f5af86", //AI數據分析 application 1
  },
  {
    id: 4,
    uid: "8dd11e37-1b7e-cf24-71f2-5d8d7d058f31",
    created_time: "2024-05-10 21:17:54",
    name: "AI數據分析 training pipeline 1",
    description: "training pipeline description",
    type: "training",
    f_application_uid: "17c8f0e6-ad1a-673c-4797-a2c252f5af86", //AI數據分析 application 1
  },
  {
    id: 5,
    uid: "8b5fc02b-e840-394c-2b5d-2b1cf03033a9",
    created_time: "2024-05-10 21:17:54",
    name: "UAV路徑預測 preprocessing pipeline 2",
    description: "preprocessing pipeline description",
    type: "preprocessing",
    f_application_uid: "3d064139-bad9-a033-5e89-960948ff9c17", //UAV路徑預測 application 1
  },
  {
    id: 6,
    uid: "72947728-e62a-dd94-e860-18302a0c2cee",
    created_time: "2024-05-10 21:17:54",
    name: "UAV路徑預測 training pipeline 2",
    description: "training pipeline description",
    type: "training",
    f_application_uid: "3d064139-bad9-a033-5e89-960948ff9c17", //UAV路徑預測 application 1
  },
];

// 取得pipelines
router.post("/getPipelines", (req, res) => {
  const { uid, type } = req.body;

  const filteredPipelines = pipelines.filter(
    (pipeline) =>
      pipeline.f_application_uid === uid && pipeline.type === type
  );

  if (filteredPipelines.length > 0) {
    res.json(filteredPipelines);
  } else {
    res.status(404).json({ message: "Pipelines not found" });
  }
});

// 取得單一pipeline
router.post("/getPipeline", (req, res) => {
  const { uid } = req.body;

  let pipeline = pipelines.find((pipeline) => pipeline.uid === uid);
  if (pipeline) {
    res.json(pipeline);
  } else {
    res.status(404).json({ message: "Pipeline not found" });
  }
});

// 更新pipeline
router.post("/updatePipeline", (req, res) => {
  const { uid, name, description } = req.body;

  let pipeline = pipelines.find((p) => p.uid === uid);

  if (pipeline) {
    pipeline.name = name || pipeline.name;
    pipeline.description = description || pipeline.description;
    res.json({ message: "Pipeline updated successfully", pipeline });
  } else {
    res.status(404).json({ message: "Pipeline not found" });
  }
});

// 刪除pipeline
router.post("/deletePipeline", (req, res) => {
  const { uid } = req.body;

  const pipelineIndex = pipelines.findIndex((p) => p.uid === uid);

  if (pipelineIndex !== -1) {
    pipelines.splice(pipelineIndex, 1);
    res.json({ message: "Pipeline deleted successfully" });
  } else {
    res.status(404).json({ message: "Pipeline not found" });
  }
});

module.exports = router;
