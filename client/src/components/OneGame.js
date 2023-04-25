import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";

function OneGame(props) {
  const { id } = props;

  const [game, setGame] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/games/${id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setGame(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const deleteGame = () => {
    axios
      .delete(`http://localhost:8000/api/games/${id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <header>
        <h1
          style={{
            fontSize: "50px",
            borderBottom: "5px double lightgray",
            marginLeft: "450px",
            marginRight: "450px",
          }}
        >
          {game.name}
        </h1>
        <Link to={"/"}>Return Home</Link>
      </header>
      <img
        src={game.image}
        alt="Game Image"
        style={{ width: "150px", height: "150px" }}
      />
      <p>{game.genre}</p>
      <p>{game.yearReleased}</p>
      <p>{game.rating}</p>
      <p>{game.company}</p>
      {/* <button onClick={() => deleteGame(game._id)}>Delete</button> */}
      <button onClick={deleteGame}>Delete</button>
    </div>
  );
}

export default OneGame;
