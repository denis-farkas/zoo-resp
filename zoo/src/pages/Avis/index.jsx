import "./avis.css"
import React, { useState } from 'react';

function AvisForm() {
  const [pseudo, setPseudo] = useState('');
  const [avis, setAvis] = useState('');
  const [avisList, setAvisList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAvis = { pseudo, avis, status: 'pending' };
    setAvisList([...avisList, newAvis]);
    setPseudo('');
    setAvis('');
  };

  const handleStatusChange = (index, newStatus) => {
    const updatedAvisList = avisList.map((item, i) =>
      i === index ? { ...item, status: newStatus } : item
    );
    setAvisList(updatedAvisList);
  };

  return (
    <div className="first-title-formulaire-avis">
      <h1 className="title-formulaire-avis">Formulaire d'Avis</h1>
      <form onSubmit={handleSubmit}>
        <div className="text-formulaire-pseudo">
          <label>
            Pseudo:
            <input
              type="text"
              value={pseudo}
              onChange={(e) => setPseudo(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="avis-formulaire-avis">
          <label>
            Avis:
            <textarea
              value={avis}
              onChange={(e) => setAvis(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="soumettre">
        <button type="submit">Soumettre</button>
        </div>
      </form>
      <h2 className="liste-avis">Liste des Avis</h2>
      <ul className="index">
        {avisList.map((item, index) => (
          <li key={index}>
            <strong>{item.pseudo}</strong>: {item.avis} (Status: {item.status})
            <button onClick={() => handleStatusChange(index, 'accepted')}>Accepter</button>
            <button onClick={() => handleStatusChange(index, 'refused')}>Refuser</button>
            <button onClick={() => handleStatusChange(index, 'diffused')}>Diffuser</button>
          </li>
          
        ))}
      </ul>
    </div>
   
    
    
  );
}

export default AvisForm;
















    
  
              
  


