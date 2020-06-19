import React from "react";
import "./ImperialCard.css";

const ImperialCard = (props) => {
  <div className="card" onClick={() => props.handleClick(props.id)}>
      <div className="image-container">
          <img className{( props.score === 0 && props.message !== "Click a helmet to begin!") ? "shake" : ""} alt={props.name} src{props.image} /> 
      </div>
  </div>
};
