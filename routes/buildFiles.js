const express = require("express");
const router = express.Router();

let buildFiles = [
  {
    id: 1,
    uid: "98d4d8a2-84cc-4b2c-8d78-8105a36010d5",
    created_time: "2024-05-10 21:17:54",
    name: "UAV路徑預測 preprocessing build file 1",
    description: "preprocessing build file description",
    type: "preprocessing",
    f_pipeline_uid: "39ea45ea-fab1-ba4d-1057-79fc317917a6", //UAV路徑預測 preprocessing pipeline 1
  },
  {
    id: 2,
    uid: "9ac7fd0e-ec0c-4a83-b225-2867d9281e1c",
    created_time: "2024-05-10 21:17:54",
    name: "UAV路徑預測 preprocessing build file 2",
    description: "preprocessing build file description",
    type: "preprocessing",
    f_pipeline_uid: "39ea45ea-fab1-ba4d-1057-79fc317917a6", //UAV路徑預測 preprocessing pipeline 1
  },
  {
    id: 3,
    uid: "88f92ae8-3ba7-4773-a85d-971857af1656",
    created_time: "2024-05-10 21:17:54",
    name: "UAV路徑預測 training build file 1",
    description: "training build file description",
    type: "training",
    f_pipeline_uid: "6ef6bf11-aefe-8439-5c4d-c23b1247357f", //UAV路徑預測 training pipeline 1
  },
  {
    id: 4,
    uid: "d30787f1-696c-4986-82c5-b19c88cf02ae",
    created_time: "2024-05-10 21:17:54",
    name: "UAV路徑預測 training build file 2",
    description: "training build file description",
    type: "training",
    f_pipeline_uid: "6ef6bf11-aefe-8439-5c4d-c23b1247357f", //UAV路徑預測 training pipeline 1
  },
  {
    id: 5,
    uid: "4d04d082-550d-4d04-831d-d77f372652e2",
    created_time: "2024-05-10 21:17:54",
    name: "AI數據分析 preprocessing build file 1",
    description: "preprocessing build file description",
    type: "preprocessing",
    f_pipeline_uid: "da1f92fa-0871-fa0c-85f8-a8e9f192b918", //AI數據分析 preprocessing pipeline 1
  },
  {
    id: 6,
    uid: "6eb84bb5-fafd-410c-a381-a3dbd7897023",
    created_time: "2024-05-10 21:17:54",
    name: "AI數據分析 preprocessing build file 2",
    description: "preprocessing build file description",
    type: "preprocessing",
    f_pipeline_uid: "da1f92fa-0871-fa0c-85f8-a8e9f192b918", //AI數據分析 preprocessing pipeline 1
  },
  {
    id: 7,
    uid: "8b0b08f9-5fe8-4182-98a6-d1a89e3496da",
    created_time: "2024-05-10 21:17:54",
    name: "AI數據分析 training build file 1",
    description: "training build file description",
    type: "training",
    f_pipeline_uid: "8dd11e37-1b7e-cf24-71f2-5d8d7d058f31", //AI數據分析 training pipeline 1
  },
  {
    id: 7,
    uid: "ff898c5f-1dda-43ea-990c-0d19386615ea",
    created_time: "2024-05-10 21:17:54",
    name: "AI數據分析 training build file 2",
    description: "training build file description",
    type: "training",
    f_pipeline_uid: "8dd11e37-1b7e-cf24-71f2-5d8d7d058f31", //AI數據分析 training pipeline 1
  },
];

// 取得buildfiles
router.post("/getBuildFiles", (req, res) => {
  const { uid, type } = req.body;
  const filteredBuildFiles = buildFiles.filter(
    (buildFile) =>
      buildFile.f_pipeline_uid === uid && buildFile.type === type
  );
  if (filteredBuildFiles.length > 0) {
    res.json(filteredBuildFiles);
  } else {
    res.status(404).json({ message: "Build Files not found" });
  }
});

// 更新buildfile
router.post("/updateBuildFile", (req, res) => {
  const { uid, name, description } = req.body;

  let buildFile = buildFiles.find((b) => b.uid === uid);

  if (buildFile) {
    buildFile.name = name || buildFile.name;
    buildFile.description = description || buildFile.description;

    res.json({ message: "Build File updated successfully", buildFile });
  } else {
    res.status(404).json({ message: "Build File not found" });
  }
});

// 刪除buildFile
router.post("/deleteBuildFile", (req, res) => {
  const { uid } = req.body;

  const buildFileIndex = buildFiles.findIndex((b) => b.uid === uid);

  if (buildFileIndex !== -1) {
    buildFiles.splice(buildFileIndex, 1);
    res.json({ message: "Build File deleted successfully" });
  } else {
    res.status(404).json({ message: "Build File not found" });
  }
});

module.exports = router;
