const express = require("express");
const router = express.Router();

let tasks = [
  {
    id: 1,
    uid: "5bfa7740-e71a-f5f5-7658-6f9ad4e17b24",
    created_time: "2024-05-10 21:17:54",
    name: "UAV路徑預測 preprocessig task 1",
    description: "preprocessig task description",
    type: "preprocessing",
    status: "Success",
    f_pipeline_uid: "39ea45ea-fab1-ba4d-1057-79fc317917a6", //UAV路徑預測 preprocessing pipeline 1
  },
  {
    id: 2,
    uid: "684ac5b8-938d-1c6d-e367-067795e256b1",
    created_time: "2024-05-10 21:17:54",
    name: "UAV路徑預測 preprocessig task 2",
    description: "preprocessig task description",
    type: "preprocessing",
    status: "Running",
    f_pipeline_uid: "39ea45ea-fab1-ba4d-1057-79fc317917a6", //UAV路徑預測 preprocessing pipeline 1
  },
  {
    id: 3,
    uid: "507ad266-9c99-dec5-7844-062c09a024e0",
    created_time: "2024-05-10 21:17:54",
    name: "UAV路徑預測 training task 1",
    description: "training task description",
    type: "training",
    status: "Success",
    f_pipeline_uid: "6ef6bf11-aefe-8439-5c4d-c23b1247357f", //UAV路徑預測 training pipeline 1
  },
  {
    id: 4,
    uid: "42e9095f-b377-c2e8-b5b3-f002134abc38",
    created_time: "2024-05-10 21:17:54",
    name: "UAV路徑預測 training task 2",
    description: "training task description",
    type: "training",
    status: "",
    f_pipeline_uid: "6ef6bf11-aefe-8439-5c4d-c23b1247357f", //UAV路徑預測 training pipeline 1
  },
  {
    id: 5,
    uid: "8de50f71-ee05-98ee-21a1-e6508b791cd2",
    created_time: "2024-05-10 21:17:54",
    name: "AI數據分析 preprocessing task 1",
    description: "preprocessing task description",
    type: "preprocessing",
    status: "Faild",
    f_pipeline_uid: "da1f92fa-0871-fa0c-85f8-a8e9f192b918", //AI數據分析 preprocessing pipeline 1
  },
  {
    id: 6,
    uid: "8893d492-74cf-df14-de8d-547429a3da60",
    created_time: "2024-05-10 21:17:54",
    name: "AI數據分析 preprocessing task 2",
    description: "preprocessing task description",
    type: "preprocessing",
    status: "",
    f_pipeline_uid: "da1f92fa-0871-fa0c-85f8-a8e9f192b918", //AI數據分析 preprocessing pipeline 1
  },
  {
    id: 7,
    uid: "2f00ac23-0b76-81bc-f6a9-3511591c9433",
    created_time: "2024-05-10 21:17:54",
    name: "AI數據分析 training task 1",
    description: "training task description",
    type: "training",
    status: "",
    f_pipeline_uid: "8dd11e37-1b7e-cf24-71f2-5d8d7d058f31", //AI數據分析 training pipeline 1
  },
  {
    id: 8,
    uid: "5dce89a2-09eb-3d36-12ea-fb2b70266051",
    created_time: "2024-05-10 21:17:54",
    name: "AI數據分析 training task 2",
    description: "training task description",
    type: "training",
    status: "",
    f_pipeline_uid: "8dd11e37-1b7e-cf24-71f2-5d8d7d058f31", //AI數據分析 training pipeline 1
  },
  {
    id: 9,
    uid: "4edb16b0-eb0e-4cad-b1fc-b222ed63a324",
    created_time: "2024-05-10 21:17:54",
    name: "UAV路徑預測 preprocessig task 3",
    description: "preprocessig task description",
    type: "preprocessing",
    status: "Failed",
    f_pipeline_uid: "39ea45ea-fab1-ba4d-1057-79fc317917a6", //UAV路徑預測 preprocessing pipeline 1
  },
];

// 取得tasks
router.post("/getTasks", (req, res) => {
  const { uid, type } = req.body;
  const filterTasks = tasks.filter(
    (task) => task.f_pipeline_uid === uid && task.type === type
  );
  if (filterTasks.length > 0) {
    res.json(filterTasks);
  } else {
    res.status(404).json({ message: "Tasks not found" });
  }
});

module.exports = router;
