import React from "react";
import "./ImperialCard.css";

const ImperialCard = (props) => {
  // eslint-disable-next-line no-unused-expressions
  <div className="card" onClick={() => props.handleClick(props.id)}>
      <div className="image-container">
          <img className={(props.score === 0 && props.message !== "Click a helmet to begin!") ? "shake" : ""} alt={props.name} src={props.image} /> 
      </div>
  </div>
};


export default ImperialCard;