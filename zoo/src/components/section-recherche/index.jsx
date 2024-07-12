import React from 'react'
import './section-recherche.css'
const Sectionrecherche = () => {
  return (
    <div className="recherche-animaux">
      <div className="title-education whiter"><h1>Recherche</h1> </div>
      <div className="bloc-style yellow-dark ">
        <h1 className="bloc-titres"> Recherche pour le bien être des animaux</h1>
        <div className="bloc-image image ">
          <img
            src="https://th.bing.com/th/id/R.25884bc49375c680da8575bbc512dd65?rik=O8agkTqbr8wNoQ&riu=http%3a%2f%2fwww.sosveterinaires.be%2fwp-content%2fuploads%2f2015%2f03%2fzoo3-soigneur.jpg&ehk=X47l4t15ahlzFm2C1PCGfPjptzeZa2adissfQ6e5gEk%3d&risl=&pid=ImgRaw&r=0"
            className="photo-conservation"
            alt=""
          />
        </div>
      </div>

      <div className="bloc-style yellow-dark">
        <h5 className="bloc-titres ">Veille active</h5>
        <p className="bloc-paragraphes ">
          Nous veillons à ce que les animaux soient bien traités et que leur
          environnement soit adapté à leur bien-être.
        </p>
        <div className="bloc-image image">
          <img
            src="https://www.zoodelahautetouche.fr/sites/hautetouche/files/styles/1020x576/public/thumbnails/image/veterinaire_et_soigneur_a_la_reserve_c_mnhn_-_f-g_grandin.jpg?itok=n26veCac"
            className="photo-dentiste"
            alt=""
          />
        </div>
      </div>
      <div className="bloc-style yellow-dark">
        <h5 className="bloc-titres ">Traitement</h5>
        <p className="bloc-paragraphes">
          Nous traitons les animaux malades et les aidons à retrouver la santé
          et leur autonomie.
        </p>

        <div className="bloc-image image">
          <img src="https://www.educatel.fr/wp-content/uploads/2021/04/metier-devenir-soigneur-animalier-1.jpg" className="photo-soin" alt=""
          />
          </div>
        </div>
        <div className="bloc-style yellow-dark">
        <h5 className="bloc-titres ">Suivi</h5>
        <p className="bloc-paragraphes">
          Nous suivons les animaux relâchés dans le zoo de Brocéliande pour nous assurer
          qu'ils s'adaptent bien à leur nouvel environnement.
        </p>

        <div className="bloc-image image">
          <img
            src="https://www.labourbansais.com/wp-content/uploads/2022/07/sdj-3-1024x628.jpg"
            className="photo-intervention"
            alt=""
          />
        </div>
        </div>
        
        
    
    </div>
  )
}

export default Sectionrecherche