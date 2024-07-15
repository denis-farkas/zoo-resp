import { useState, useEffect } from "react";
import ThumbAvis from "../Thumb-avis";
import axios from "axios";
import "./section-avis.css";

const SectionAvis = () => {
  const [avis, setAvis] = useState(null);

  useEffect(() => {
    const API_URL = "http://localhost:3001";

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${API_URL}/api/readAvis`,
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .request(config)
      .then((response) => {
        setAvis(response.data.avis);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="section-avis">
      <div className="avis-title">
        <h1 className="avis-service">Quelques avis de nos visiteurs</h1>
      </div>
      <div className="avis-jumbotron">
        {avis &&
          avis
            .slice(0, 4)
            .map((avis, index) => <ThumbAvis key={index} avis={avis} />)}
      </div>
    </div>
  );
};

export default SectionAvis;
