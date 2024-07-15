const ViewAnimal = ({ animal, closeAnimal }) => {
  return (
    <div className="display-view-message my-3">
      <figure>
        <div className="space-close-button">
          <button className="close-button" onClick={closeAnimal}>
            X
          </button>
        </div>
        <blockquote className="blockquote">
          <p className="mb-0">{animal.DESCRIPTION}</p>
        </blockquote>

        <figcaption className="blockquote-footer">
          <p>Nom: {animal.TITLE}</p>
        </figcaption>
        <figcaption className="blockquote-footer">
          <p>{animal.SANTE ? `Santé: ${animal.SANTE}` : null}</p>
          <p>{animal.SOIN ? `Soins: ${animal.SOIN}` : null}</p>
        </figcaption>
      </figure>
    </div>
  );
};

export default ViewAnimal;
