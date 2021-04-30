const router = require("express").Router();
let Exercise = require("../models/exercise.model");

router.route("/").get((res, req) => {
  Exercise.find()
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/add").post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = req.body.duration;
  const date = req.body.date;

  const newExercise = new Exercise({ username, description, duration, date });

  newExercise
    .save()
    .then(() => res.json("Exercise added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((res, req) => {
  Exercise.findById(req.params.id)
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((res, req) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then((exercises) => res.json("Exercise Deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/update/:id").get((res, req) => {
  Exercise.findById(req.params.id)
    .then((exercises) => {
      exercises.username = req.body.username;
      exercises.description = req.body.description;
      exercises.duration = req.body.duration;
      exercises.date = req.body.date;
      exercises
        .save()
        .then(() => res.json("Exercise updated"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
