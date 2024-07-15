import { useEffect, useState } from "react";
import axios from "axios";
import "./section-mission.css";
import "./section-mission-small.css";
import MissionCard from "../MissionCard";

const Mission = () => {
  const [missions, setMissions] = useState();

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:3001/api/mission",
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .request(config)
      .then((response) => {
        setMissions(response.data.mission);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="section-mission">
      <div className="mission-title">
        <h1 className="mission-title">Nos missions</h1>
      </div>
      <div className="mission-jumbotron">
        {missions &&
          missions.map((mission, index) => (
            <MissionCard key={index} mission={mission} />
          ))}
      </div>
    </div>
  );
};

export default Mission;
