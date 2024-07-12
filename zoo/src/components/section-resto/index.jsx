import React from "react";
import "./sectionresto.css";

const Sectionservice = () => {
  return (
    <div className="resto-service">
      <div className="bloc-write-resto yellow-dark ">
        <h1 className="bloc-title">
          Bienvenue au restaurant du zoo de Brocéliande
        </h1>
        <div className="bloc-image-resto image ">
          <img
            src="https://i.pinimg.com/originals/45/23/2c/45232c834079b51729bc4e30bc5b2909.jpg"
            className="photo-serveuse"
            alt=""
          />
        </div>
      </div>

      <div className="bloc-write-resto yellow-dark">
        <h5 className="bloc-title ">Horaires</h5>
        <p className="bloc-para">
          Le restaurant de Brocéliande est ouvert tous les jours de 09h00 à
          22h00. Le salle est entièrement climatisée et les terrasses sont
          ombragées.
        </p>
        <div className="bloc-image-resto image">
          <img
            src="https://th.bing.com/th/id/OIP.DNOK3P_aJVgQY--iF8rfagEyDM?rs=1&pid=ImgDetMain"
            className="photo-terrasse"
            alt=""
          />
        </div>
      </div>
      <div className="bloc-write-resto yellow-dark">
        <h5 className="bloc-title ">Buffet</h5>
        <p className="bloc-para">
          Buffet à volonté composé de spécialités contientales et
          asiatiques.Vous pourez même préparer vos propres shusis avec les
          conseils de notre chef.
        </p>

        <div className="bloc-image image">
          <img
            src="https://th.bing.com/th/id/OIP.u3fIQpdIrMYPgxVGvUziPQHaFj?rs=1&pid=ImgDetMain"
            className="photo-buffet"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Sectionservice;
