import { useState, useEffect } from "react";
import "./section-prestation.css";
import "./section-prestation-small.css";
import PrestationCard from "../PrestationCard";
import axios from "axios";

const PrestationS = () => {
  const [prestations, setPrestations] = useState();

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:3001/api/prestation",
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .request(config)
      .then((response) => {
        setPrestations(response.data.prestation);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="section-prestation">
      <div className="prestation-title">
        <h1 className="prestation-service">Nos services</h1>
      </div>
      <div className="prestation-jumbotron">
        {prestations &&
          prestations.map((prestation, index) => (
            <PrestationCard key={index} prestation={prestation} />
          ))}
      </div>
    </div>
  );
};

export default PrestationS;
