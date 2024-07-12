import axios from "axios";
import React, { useEffect, useState } from "react";
import HabitatCard from "../../components/HabitatCard";
import "./habitats.css";

const Habitats = () => {
  const [habitats, setHabitats] = useState();

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/api/habitats",
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .request(config)
      .then((response) => {
        setHabitats(response.data.habitats);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="full-height">
        <h1 className="title-hight">LES HABITATS</h1>
        <p className="para">
          Les zoos jouent un rôle crucial dans la conservation de la
          biodiversité et de l'éducation du public. Représenter fidèlement les
          différents écosystèmes du monde permet aux visisteursde mieux
          comprendre la complexité des environnements naturels. Ctte approche
          sensibilise le public à la nécéssisté de protéger ces habitats et
          offre des conditions de vie plus adaptées aux animaux, contribuant à
          leur bien-être. Par exemple, une savane récréée permet aux lions et
          les éléphants de coexister comme dans la nature. De même, une forêt
          tropicale offre un espace adéquat aux gorilles et pérroquets,
          favorisant leur comportement naturel. Zn outre, les visiteurs peuvent
          observer les effets des changements climatiques et de la destruction
          des habitat, renforçant l'importance des efforts de conservation. Les
          zoos deviennent ainsi des plateformes éducatives dynamiques, inspirant
          une nouvelle génération de défenseurs de l'environnement prêts à
          protéger notre précieux patrimoine naturel.{" "}
        </p>
        <div className="container-habitats ">
          {habitats &&
            habitats.map((habitat) => (
              <HabitatCard key={habitat.id_habitat} habitat={habitat} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Habitats;
