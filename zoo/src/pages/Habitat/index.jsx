import{useParams} from 'react-router-dom';
import './habitat.css';
import HabitatPres from '../../components/HabitatPres';
import Animaux from '../../components/Animaux';
import axios from 'axios';
import { useEffect, useState } from 'react';


const Habitat = () => {

  const {id_habitat} = useParams();

  const [habitat, setHabitat] = useState()
  const [animaux, setAnimaux] = useState()

useEffect(() => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "http://localhost:3000/api/habitat/"+id_habitat,
    headers: {
        "Content-Type": "application/json",
    }
    
};
axios
            .request(config)
            .then((response) => {
              console.log(response)
                setHabitat(response.data.habitat);
            })
            .catch((error) => {
                console.log(error);
            });  
}, [id_habitat])

useEffect(() => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "http://localhost:3000/api/animaux/"+id_habitat,
    headers: {
        "Content-Type": "application/json",
    }
    
};
axios
            .request(config)
            .then((response) => {
              console.log(response)
                setAnimaux(response.data.animaux);
            })
            .catch((error) => {
                console.log(error);
            });  
}, [id_habitat])
    return (
      <div className="container-habitat">
      
          
       {habitat && <HabitatPres habitat={habitat}/>  }
        {animaux && <Animaux animaux={animaux}/>  }
     
</div>
    )}
      export default Habitat