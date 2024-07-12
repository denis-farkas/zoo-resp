import React from "react";
import "./habitatpres.css";
import "./habitatpres-small.css";

const HabitatPres = ({ habitat }) => {
  return (
    <>
      <div className="habitat-title">
        <h1>{habitat.TITLE}</h1>
      </div>
      <div className="habitat-container">
        <div className="habitat-texte">
          <p className="habitat-para">{habitat.DESCRIPTION}</p>
        </div>
        <div className="habitat-photo">
          <img src={`/${habitat.IMG2}`} alt="" />
        </div>
      </div>
    </>
  );
};

export default HabitatPres;
