import React from "react";
import "./habitat-card.css";
import { Link } from "react-router-dom";
const HabitatCard = ({ habitat }) => {
  return (
    <div className="card  mb-3 habitat-card">
      <Link to={`/habitat/${habitat.id_habitat}`}>
        <div className=" habitat-card-header">
          {" "}
          <img src={`/${habitat.IMG}`} alt="" />{" "}
        </div>
        <div className="habitat-card-body">
          <h4 className="habitat-card-title">{habitat.TITLE}</h4>
        </div>
      </Link>
    </div>
  );
};

export default HabitatCard;
