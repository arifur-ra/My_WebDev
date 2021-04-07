// 1. Import everything  What I need

const express = require("express");
const adminRouter = require("./routes/adminRouter");
const publicRouter = require("./routes/publicRouter");

//2. Create the express app, use the middleware that I need.(add the configuration to my express app)

const app = express();

//3. Determine the behavior of my express app, create the needed routes.

app.use("/admin", adminRouter);
app.use("/", publicRouter);

// 4. Start listening to the part
const PORT = 4000;
app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Application is listening in http://localhost: ${PORT}`);
});
