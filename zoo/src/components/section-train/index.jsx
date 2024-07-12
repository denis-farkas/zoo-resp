import React from "react";
import "./sectiontrain.css";

const Sectiontrain = () => {
  return (
    <div className="petitrain-service brown">
      <div className="petit-header">
        <h2 className="">Le petit train du zoo de Brocéliande</h2>
      </div>
      <div className="petit-body">
        <div className="petit-body-left">
          <h4> Horaires: </h4>
          <p className="little-p">
            Le petit train est en gare à l'entrée du zoo, il prend son service à
            10h00 et fait des rotations toutes les heures. Pour votre sécurité,
            veuillez-vous attacher et ne pas descendre qaund le petit train
            circule.
          </p>
        </div>
        <div className="petit-body-right">
          <img
            src="https://www.cerza.com/wp-content/uploads/2021/03/Safari-train-1.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Sectiontrain;
