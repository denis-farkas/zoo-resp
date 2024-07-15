import React from "react";
import "./animalcard.css";

import { Link } from "react-router-dom";
const AnimalCard = ({ animal }) => {
  return (
    <div className="card  mb-3 animal-card">
      <Link to={`/animal/${animal.ID_animaux}`}>
        <div className=" animal-card-header">
          {" "}
          <img src={`/${animal.IMG}`} alt="" />{" "}
        </div>
        <div className="animal-card-body">
          <h4 className="animal-card-title">{animal.TITLE}</h4>
        </div>
      </Link>
    </div>
  );
};
export default AnimalCard;
