import React from "react";
import "./thumb-avis.css";

const ThumbAvis = ({ avis }) => {
  return (
    <div>
      <figure>
        <blockquote className="blockquote">
          <p class="mb-0">{avis.content}</p>
        </blockquote>
        <figcaption className="blockquote-footer">
          {avis.name} <br />
          <cite title="Source Title">{avis.date}</cite>
        </figcaption>
      </figure>
    </div>
  );
};

export default ThumbAvis;
