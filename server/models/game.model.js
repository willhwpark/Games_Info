const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      // Validation below
      required: [true, "A game name is required!"],
      minlength: [3, "A game name must be at least 3 length long!"],
    },
    yearReleased: {
      type: Number,
      // Validation below
      required: [true, "A game's release year is required!"],
      min: [3, "Video game didn't released before 1950!"],
    },
    genre: {
      type: String,
      // Validation below
      required: [true, "Need genre"],
      enum: [
        "Action",
        "Platform",
        "Survival",
        "RPG",
        "FPS",
        "RTS",
        "MMO",
        "Puzzle",
        "Sports",
        "Adventure",
        "Children",
        "Strategy",
      ],
    },
    image: {
      type: String,
      required: [true, "We need a picture!!"],
    },
    rating: {
      type: String,
      enum: ["T", "E", "M", "AO", "E10", "Y", "No Rating"],
    },
    company: {
      type: String,
    },
  },
  { timestamps: true }
);

const Game = mongoose.model("Game", GameSchema);

module.exports = Game;
