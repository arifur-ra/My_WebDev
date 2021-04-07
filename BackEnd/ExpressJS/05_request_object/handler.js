// const handler = (req, res) => {
//   console.log("application");
//   res.send("Hello Application");
// };

const handler = (req, res) => {
  console.log(req.accepts("html"));
  res.send("Hello Application");
};

module.exports = handler;
