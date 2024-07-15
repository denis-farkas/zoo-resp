import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./animal.css";

const Animal = () => {
  const { id } = useParams();

  const [animal, setAnimal] = useState();

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:3001/api/animal/" + id,
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .request(config)
      .then((response) => {
        console.log(response);
        setAnimal(response.data.animal);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div className=" main-table">
      <div className="animal">
        <div className="mx-auto mb-5">
          <h2>{animal && animal.TITLE}</h2>
        </div>
        <div className="animal-content">
          <div className="animal-left">
            <div className="flex-item yellow">
              <b>Description: </b>
              <br />
              {animal && animal.descript_animal}
            </div>
            <div className="flex-item green">
              <b>Santé: </b>
              <br />
              {animal && animal.SANTE}
            </div>
            <div className="flex-item blue">
              <b>Soins: </b>
              <br />
              {animal && animal.SOIN}
            </div>
            <div className="flex-item red">
              <b>Nouriture: {animal && animal.alim}</b>

              <br />
              {animal && animal.descript_alimentation}
            </div>
          </div>
          <div className="animal-right">
            <img src={`/${animal && animal.IMG}`} alt="animal" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Animal;
