const GameController = require("../controllers/game.controller");

module.exports = (app) => {
  app.get("/api/games/", GameController.findAllGames);
  app.post("/api/games/", GameController.crateNewGame);
  app.get("/api/games/:id", GameController.findOneGame);
  app.delete("/api/games/:id", GameController.deleteOneGame);
  app.put("/api/games/:id", GameController.updateOneGame);
};
