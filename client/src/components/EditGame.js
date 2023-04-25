import React, { useState, useEffect } from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";

function EditGame(props) {
  const { id } = props;

  const [name, setName] = useState("");
  const [yearReleased, setYearReleased] = useState("");
  const [genre, setGenre] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/games/${id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setName(res.data.name);
        setYearReleased(res.data.yearReleased);
        setGenre(res.data.genre);
        setImage(res.data.image);
        setRating(res.data.rating);
        setCompany(res.data.company);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const editHandler = (e) => {
    e.preventDefault();
    axios
      .put(
        `http://localhost:8000/api/games/${id}`,
        // request body
        {
          name, // shorter way to type name: name
          yearReleased,
          genre,
          image,
          rating,
          company,
        }
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        console.log("err.response:", err.response);
        console.log("err.response.data:", err.response.data);
        console.log("err.response.data.errors:", err.response.data.errors);
        setError(err.response.data.errors);
      });
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
          Edit a Game!
        </h1>
        <Link to={"/"}>Return Home</Link>
      </header>
      <form onSubmit={editHandler}>
        <div>
          <label>Name</label>
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
          />
          {error.name ? <span>{error.name.message}</span> : null}
        </div>

        <div>
          <label>Year Released</label>
          <input
            value={yearReleased}
            onChange={(e) => {
              setYearReleased(e.target.value);
            }}
            type="text"
          />
          {error.yearReleased ? (
            <span>{error.yearReleased.message}</span>
          ) : null}
        </div>

        <div>
          <label>Genre</label>
          <select
            value={genre}
            onChange={(e) => {
              setGenre(e.target.value);
            }}
            name="genre"
          >
            <option value="none" defaultValue hidden>
              Select a Genre
            </option>
            <option value="Action">Action</option>
            <option value="Platform">Platform</option>
            <option value="Survival">Survival</option>
            <option value="RPG">RPG</option>
            <option value="FPS">FPS</option>
            <option value="RTS">RTS</option>
            <option value="MMO">MMO</option>
            <option value="Puzzle">Puzzle</option>
            <option value="Sports">Sports</option>
            <option value="Adventure">Adventure</option>
            <option value="Children">Children</option>
            <option value="Strategy">Strategy</option>
          </select>
          {error.genre ? <span>{error.genre.message}</span> : null}
        </div>

        <div>
          <label>Image</label>
          <input
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
            type="text"
          />
          {error.image ? <span>{error.image.message}</span> : null}
        </div>

        <div>
          <label>Rating</label>
          <select
            value={rating}
            onChange={(e) => {
              setRating(e.target.value);
            }}
            name="rating"
          >
            <option value="none" defaultValue hidden>
              Select a Rating
            </option>
            <option value="T">T</option>
            <option value="E">E</option>
            <option value="M">M</option>
            <option value="AO">AO</option>
            <option value="E10">E10</option>
            <option value="Y">Y</option>
            <option value="No Rating">No Rating</option>
          </select>
          {error.rating ? <span>{error.rating.message}</span> : null}
        </div>

        <div>
          <label>Company Name</label>
          <input
            value={company}
            onChange={(e) => {
              setCompany(e.target.value);
            }}
            type="text"
          />
          {error.company ? <span>{error.company.message}</span> : null}
        </div>
        <button>Edit Game</button>
      </form>
    </div>
  );
}

export default EditGame;
