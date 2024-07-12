import React from "react";
import "./missioncard.css";
import "./missioncard-small.css";
import { Link } from "react-router-dom";

const MissionCard = ({ mission }) => {
  return (
    <div className="mission-card">
      <Link to="/mission">
        <div className="mission-card-header">
          <h4>{mission.NAME}</h4>
        </div>
        <div className="mission-card-body">
          <div className="mission-circle">
            <img src={`/${mission.LOGO}`} alt={mission.NAME} />
          </div>
        </div>
        <div className="mission-card-footer">
          <p>{mission.DESCRIPTION}</p>
        </div>{" "}
        <button className="button-mission">Voir</button>
      </Link>
    </div>
  );
};

export default MissionCard;
