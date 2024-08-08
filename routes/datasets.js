const express = require("express");
const router = express.Router();

let datasets = [
  {
    id: 1,
    uid: "a90af589-360e-6985-f987-96997948fb95",
    created_time: "2024-05-10 21:17:54",
    name: "UAV路徑預測 Original dataset 1",
    description: "original dataset description",
    type: "original",
    f_project_uid: "9d55a897-5b54-cdd2-8674-73484212e0b2", //UAV路徑預測project uid
    f_application_uid: " ",
  },
  {
    id: 2,
    uid: "b9ef0192-06c9-f657-1e08-7ca23b936b21",
    created_time: "2024-05-10 21:17:54",
    name: "AI數據分析 Original dataset 2",
    description: "original dataset description",
    type: "original",
    f_project_uid: "d1686018-45a0-98fa-6be6-5e4e58eac6ea", //AI數據分析project uid
    f_application_uid: " ",
  },
  {
    id: 3,
    uid: "ede8ae9b-4e17-bd68-86f3-b5cdde90264f",
    created_time: "2024-05-10 21:17:54",
    name: "UAV路徑預測 Training dataset 1",
    description: "training dataset description",
    type: "training",
    f_project_uid: "9d55a897-5b54-cdd2-8674-73484212e0b2", //UAV路徑預測project uid
    f_application_uid: " ",
  },
  {
    id: 4,
    uid: "51010a82-0f3a-e8ee-0522-d63ae7502842",
    created_time: "2024-05-10 21:17:54",
    name: "AI數據分析 Training dataset 1",
    description: "training dataset description",
    type: "training",
    f_project_uid: "d1686018-45a0-98fa-6be6-5e4e58eac6ea", //AI數據分析project uid
    f_application_uid: " ",
  },
  {
    id: 5,
    uid: "62c9036b-b31a-4e66-a13b-5ea84de9115d",
    created_time: "2024-05-10 21:17:54",
    name: "UAV路徑預測 Original dataset 2",
    description: "original dataset description",
    type: "original",
    f_project_uid: "9d55a897-5b54-cdd2-8674-73484212e0b2", //UAV路徑預測project uid
    f_application_uid: " ",
  },
  {
    id: 6,
    uid: "b272d7d8-333a-4ba8-99f3-83f18c93eac7",
    created_time: "2024-05-10 21:17:54",
    name: "UAV路徑預測 Training dataset 2",
    description: "training dataset description",
    type: "training",
    f_project_uid: "9d55a897-5b54-cdd2-8674-73484212e0b2", //UAV路徑預測project uid
    f_application_uid: " ",
  },
];

//取得datasets
router.post("/getDatasets", (req, res) => {
  const { uid, activeTab } = req.body;

  const filteredDatasets = datasets.filter(
    (dataset) =>
      dataset.f_project_uid === uid && dataset.type === activeTab
  );

  if (filteredDatasets.length > 0) {
    res.json(filteredDatasets);
  } else {
    res.status(404).json({ message: "Datasets not found" });
  }
});
//更新dataset
router.post("/updateDataset", (req, res) => {
  const { uid,name,description } = req.body;

  let dataset = datasets.find((d) => d.uid === uid);

  if (dataset) {
    dataset.name = name || dataset.name;
    dataset.description = description || dataset.description;

    res.json({ message: "Dataset updated successfully", dataset });
  } else {
    res.status(404).json({ message: "Dataset not found" });
  }
});
//刪除dataset
router.post("/deleteDataset", (req, res) => {
  const { uid } = req.body;

  const datasetIndex = datasets.findIndex((d) => d.uid === uid);

  if (datasetIndex !== -1) {
    datasets.splice(datasetIndex, 1);
    res.json({ message: "Dataset deleted successfully" });
  } else {
    res.status(404).json({ message: "Dataset not found" });
  }
});

module.exports = router;
