import React, { useEffect } from "react";
import { styles } from "./Detail.module.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay Personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);
  return (
    <div>
      <h1>{character.name}</h1>
      <h1>{character.status}</h1>
      <h1>{character.species}</h1>
      <h1>{character.gender}</h1>
      <h1>{character.origin?.name}</h1>
      <img src={character.image} alt="" />
    </div>
  );
};

export default Detail;
