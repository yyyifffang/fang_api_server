const express = require("express");
const router = express.Router();
const {v4:uuidv4}=require('uuid');

let projects = [
  {
    id: 1,
    uid: "9d55a897-5b54-cdd2-8674-73484212e0b2",
    name: "UAV路徑預測",
    description: "UAV路徑預測 description",
    created_time: "2024-05-10 21:17:54",
    f_organization_uid: "2df56c65-6168-7e62-e974-2d916bd56e23",
    organization: "NTUST",
  },
  {
    id: 2,
    uid: "d1686018-45a0-98fa-6be6-5e4e58eac6ea",
    name: "AI數據分析",
    description: "AI數據分析 description",
    created_time: "2024-06-12 18:20:10",
    f_organization_uid: "2df56c65-6168-7e62-e974-2d916bd56e23",
    organization: "NTUST",
  },
];

// 取得projects
router.post("/getProjects", (req, res) => {
  res.json(projects);
});

// 更新project
router.post("/updateProject", (req, res) => {
  const { uid, name, description } = req.body;

  let project = projects.find((p) => p.uid === uid);

  if (project) {
    project.name = name || project.name;
    project.description = description || project.description;

    res.json({ message: "Project updated successfully", project });
  } else {
    res.status(404).json({ message: "Project not found" });
  }
});

// 刪除project
router.post("/deleteProject", (req, res) => {
  const { uid } = req.body;

  const projectIndex = projects.findIndex((p) => p.uid === uid);

  if (projectIndex !== -1) {
    projects.splice(projectIndex, 1);
    res.json({ message: "Project deleted successfully" });
  } else {
    res.status(404).json({ message: "Project not found" });
  }
});

//創建project
router.post("/createProject", (req, res) => {
  const { name, description, organizationUID, organizationName } = req.body;

  // 檢查必填字段
  if (!name || !description || !organizationUID || !organizationName) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // 檢查資料類型
  if (typeof name !== 'string' || typeof description !== 'string' ||
    typeof organizationUID !== 'string' || typeof organizationName !== 'string') {
    return res.status(400).json({ message: "Invalid field types" });
  }

  // 創建新的 project
  const newProject = {
    id: projects.length + 1, //自動增量id
    uid: uuidv4(),//生成唯一的uid
    name,
    description,
    created_time: new Date().toISOString().replace('T', ' ').substring(0, 19), // 格式化當前時間
    f_organization_uid: organizationUID,
    organization: organizationName,
  };

  projects.push(newProject);

  res.status(201).json({ message: "Project created successfully", project: newProject });
})

module.exports = router;
