const mongoose = require("mongoose");
const Game = require("../models/game.model");

module.exports = {
  findAllGames: (req, res) => {
    Game.find()
      .then((allGames) => {
        console.log(allGames);
        res.json(allGames);
      })
      .catch((err) => {
        console.log("Find All Games Failed");
        res.json({ message: "Something went wrong in findAll", error: err });
      });
  },
  crateNewGame: (req, res) => {
    Game.create(req.body)
      .then((newGame) => {
        console.log(newGame);
        res.json(newGame);
      })
      .catch((err) => {
        console.log("Creating Game Failed");
        res.status(400).json(err);
      });
  },
  findOneGame: (req, res) => {
    Game.findOne({ _id: req.params.id })
      .then((oneGame) => {
        console.log(oneGame);
        res.json(oneGame);
      })
      .catch((err) => {
        console.log("Finding One Game Failed");
        res.json({ message: "Something went wrong in findOne", error: err });
      });
  },
  deleteOneGame: (req, res) => {
    Game.deleteOne({ _id: req.params.id })
      .then((deleteGame) => {
        console.log(deleteGame);
        res.json(deleteGame);
      })
      .catch((err) => {
        console.log("Deleting One Game Failed");
        res.json({ message: "Something went wrong in deleteOne", error: err });
      });
  },
  updateOneGame: (req, res) => {
    Game.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((updateGame) => {
        console.log(updateGame);
        res.json(updateGame);
      })
      .catch((err) => {
        console.log("Updating One Game Failed");
        res.status(400).json(err);
      });
  },
};
