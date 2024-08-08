const express = require("express");
const router = express.Router();

let images = [
  {
    id: 1,
    uid: "a4d39bd5-ecad-25dd-0b12-93a8e426d025",
    created_time: "2024-05-10 21:17:54",
    name: "UAV路徑預測 preprocessing image 1",
    description: "preprocessing imqage description",
    type: "preprocessing",
    f_pipeline_uid: "39ea45ea-fab1-ba4d-1057-79fc317917a6", //UAV路徑預測 preprocessing pipeline 1
  },
  {
    id: 2,
    uid: "27c8a0c0-1530-f4ee-30d0-ff4963df28b6",
    created_time: "2024-05-10 21:17:54",
    name: "UAV路徑預測 preprocessing image 2",
    description: "preprocessing imqage description",
    type: "preprocessing",
    f_pipeline_uid: "39ea45ea-fab1-ba4d-1057-79fc317917a6", //UAV路徑預測 preprocessing pipeline 1
  },
  {
    id: 3,
    uid: "dc58d86b-b6d7-fa7b-79d0-e937d61838d0",
    created_time: "2024-05-10 21:17:54",
    name: "UAV路徑預測 training image 1",
    description: "training imqage description",
    type: "training",
    f_pipeline_uid: "6ef6bf11-aefe-8439-5c4d-c23b1247357f", //UAV路徑預測 training pipeline 1
  },
  {
    id: 4,
    uid: "5d1fd236-fa60-a444-5bc5-7a3d628dafda",
    created_time: "2024-05-10 21:17:54",
    name: "UAV路徑預測 training image 2",
    description: "training imqage description",
    type: "training",
    f_pipeline_uid: "6ef6bf11-aefe-8439-5c4d-c23b1247357f", //UAV路徑預測 training pipeline 1
  },
  {
    id: 5,
    uid: "890ca0e9-daaa-333a-8a37-07b61c42b2ca",
    created_time: "2024-05-10 21:17:54",
    name: "AI數據分析 preprocessing image 1",
    description: "preprocessing imqage description",
    type: "preprocessing",
    f_pipeline_uid: "da1f92fa-0871-fa0c-85f8-a8e9f192b918", //AI數據分析 preprocessing pipeline 1
  },
  {
    id: 6,
    uid: "d81de931-e73a-5c4c-4a9b-3b846a364035",
    created_time: "2024-05-10 21:17:54",
    name: "AI數據分析 preprocessing image 2",
    description: "preprocessing imqage description",
    type: "preprocessing",
    f_pipeline_uid: "da1f92fa-0871-fa0c-85f8-a8e9f192b918", //AI數據分析 preprocessing pipeline 1
  },
  {
    id: 7,
    uid: "ad3884f5-c51c-9502-025f-8435f95ea436",
    created_time: "2024-05-10 21:17:54",
    name: "AI數據分析 training image 1",
    description: "training imqage description",
    type: "training",
    f_pipeline_uid: "8dd11e37-1b7e-cf24-71f2-5d8d7d058f31", //AI數據分析 training pipeline 1
  },
  {
    id: 8,
    uid: "8af8b519-b67d-45ab-c821-190ca38e1c89",
    created_time: "2024-05-10 21:17:54",
    name: "AI數據分析 training image 2",
    description: "training imqage description",
    type: "training",
    f_pipeline_uid: "8dd11e37-1b7e-cf24-71f2-5d8d7d058f31", //AI數據分析 training pipeline 1
  },
];

// 取得images
router.post("/getImages", (req, res) => {
  const { uid, type } = req.body;

  const filteredImages = images.filter(
    (image) => image.f_pipeline_uid === uid && image.type === type
  );

  if (filteredImages.length > 0) {
    res.json(filteredImages);
  } else {
    res.status(404).json({ message: "Images not found" });
  }
});

// 更新image
router.post("/updateImage", (req, res) => {
  const { uid, name, description } = req.body;

  let image = images.find((i) => i.uid === uid);

  if (image) {
    image.name = name || image.name;
    image.description = description || image.description;

    res.json({ message: "Image updated successfully", image });
  } else {
    res.status(404).json({ message: "Image not found" });
  }
});

// 刪除image
router.post("/deleteImage", (req, res) => {
  const { uid } = req.body;

  const imageIndex = images.findIndex((i) => i.uid === uid);

  if (imageIndex !== -1) {
    images.splice(imageIndex, 1);
    res.json({ message: "Image deleted successfully" });
  } else {
    res.status(404).json({ message: "Image not found" });
  }
});


module.exports = router;
