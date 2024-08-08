const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const projectRoutes = require('./routes/projects');
const datasetRoutes = require('./routes/datasets');
const applicationRoutes = require('./routes/applications');
const modelRoutes = require('./routes/models');
const pipelineRoutes = require('./routes/pipelines');
const taskRoutes = require('./routes/tasks');
const imageRoutes = require('./routes/images');
const buildFileRoutes = require('./routes/buildFiles');
const configRoutes = require('./routes/configs');
const organizationRoutes = require('./routes/organization');

app.use('',projectRoutes);
app.use('',datasetRoutes);
app.use('',applicationRoutes);
app.use('',modelRoutes);
app.use('',pipelineRoutes);
app.use('',taskRoutes);
app.use('',imageRoutes);
app.use('',buildFileRoutes);
app.use('',configRoutes)
app.use('',organizationRoutes)

app.listen(port, () => {
  console.log(`API server is running on http://localhost:${port}`);
});
