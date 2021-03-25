const handle = (req, res) => {
  console.log(res.app.locals.title);

  req.send("My first Router");
};

module.exports = handle;
