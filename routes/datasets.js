const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

let datasets = [
  {
    id: 1,
    uid: "a90af589-360e-6985-f987-96997948fb95",
    created_time: "2024-05-10 21:17:54",
    name: "UAV路徑預測 Original dataset 1",
    description: "original dataset description",
    type: "Original",
    file: "test",
    f_project_uid: "9d55a897-5b54-cdd2-8674-73484212e0b2", //UAV路徑預測project uid
    f_application_uid: " ",
  },
  {
    id: 2,
    uid: "b9ef0192-06c9-f657-1e08-7ca23b936b21",
    created_time: "2024-05-10 21:17:54",
    name: "AI數據分析 Original dataset 2",
    description: "original dataset description",
    type: "Original",
    file: "test",
    f_project_uid: "d1686018-45a0-98fa-6be6-5e4e58eac6ea", //AI數據分析project uid
    f_application_uid: " ",
  },
  {
    id: 3,
    uid: "ede8ae9b-4e17-bd68-86f3-b5cdde90264f",
    created_time: "2024-05-10 21:17:54",
    name: "UAV路徑預測 Training dataset 1",
    description: "training dataset description",
    type: "Training",
    file: "test",
    f_project_uid: "9d55a897-5b54-cdd2-8674-73484212e0b2", //UAV路徑預測project uid
    f_application_uid: " ",
  },
  {
    id: 4,
    uid: "51010a82-0f3a-e8ee-0522-d63ae7502842",
    created_time: "2024-05-10 21:17:54",
    name: "AI數據分析 Training dataset 1",
    description: "training dataset description",
    type: "Training",
    file: "test",
    f_project_uid: "d1686018-45a0-98fa-6be6-5e4e58eac6ea", //AI數據分析project uid
    f_application_uid: " ",
  },
  {
    id: 5,
    uid: "62c9036b-b31a-4e66-a13b-5ea84de9115d",
    created_time: "2024-05-10 21:17:54",
    name: "UAV路徑預測 Original dataset 2",
    description: "original dataset description",
    type: "Original",
    file: "test",
    f_project_uid: "9d55a897-5b54-cdd2-8674-73484212e0b2", //UAV路徑預測project uid
    f_application_uid: " ",
  },
  {
    id: 6,
    uid: "b272d7d8-333a-4ba8-99f3-83f18c93eac7",
    created_time: "2024-05-10 21:17:54",
    name: "UAV路徑預測 Training dataset 2",
    description: "training dataset description",
    type: "Training",
    file: "test",
    f_project_uid: "9d55a897-5b54-cdd2-8674-73484212e0b2", //UAV路徑預測project uid
    f_application_uid: " ",
  },
];

//取得datasets
router.post("/getDatasets", (req, res) => {
  const { uid, activeTab } = req.body;

  const filteredDatasets = datasets.filter(
    (dataset) => dataset.f_project_uid === uid && dataset.type === activeTab
  );

  if (filteredDatasets.length > 0) {
    res.json(filteredDatasets);
  } else {
    res.status(404).json({ message: "Datasets not found" });
  }
});

//下載dataset file
router.post("/getDatasetFile", (req, res) => {
  const { uid } = req.body;
  const filteredDataset = datasets.filter((dataset) => dataset.uid === uid);
  if (filteredDataset.length > 0) {
    const { file, name } = filteredDataset;

    //創建一個新的zip檔
    res.setHeader("Content-Type", "application/zip");
    res.setHeader("Content-Disposition", `attachment; filename=${name}.zip`);

    const archive = archiver("zip", {
      zlib: { level: 9 }, // 設置壓縮等級
    });

    // 處理壓縮過程中的錯誤
    archive.on("error", (err) => {
      console.error("Error creating ZIP archive:", err);
      res.status(500).json({ message: "Error creating ZIP archive" });
    });

    // 壓縮完成後自動結束響應
    archive.on("end", () => {
      console.log("ZIP file has been sent successfully.");
    });

    // 將 ZIP 壓縮流發送到響應中
    archive.pipe(res);

    // 添加字符串作為文件到 ZIP 中
    archive.append(file, { name: `${name}.txt` });

    // 結束壓縮流
    archive.finalize();
  } else {
    res.status(404).json({ message: "Dataset not found" });
  }
});

//更新dataset
router.post("/updateDataset", (req, res) => {
  const { uid, name, description } = req.body;

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

//創建dataset
router.post("/createDataset", (req, res) => {
  const { projectUID, name, file, type, description, applicationUID } =
    req.body;

  //創建新的dataset
  const newDataset = {
    id: datasets.length + 1, //自動增量id
    uid: uuidv4(), //生成唯一的uuid
    name,
    description,
    type,
    file,
    created_time: new Date().toISOString().replace("T", " ").substring(0, 19), // 格式化當前時間
    f_project_uid: projectUID,
    f_application_uid: applicationUID,
  };

  try {
    //將新項目添加到數組中
    datasets.push(newDataset);
    console.log("New Dataset created:", newDataset);
    res.json({ message: "Dataset created successfully", dataset: newDataset });
  } catch (error) {
    console.error("Error creating dataset:", error);
    res.status(500).json({ message: "Error creating dataset" });
  }
});

module.exports = router;
