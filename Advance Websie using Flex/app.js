const express = require("express");
const app = express();

// serve the static file

app.use(express.static("/home/dci/Github_Website/advancedWebsite"));

const port = 2024;
app.listen(port, function () {
  console.log(`Server is running port :${port}`);
});
