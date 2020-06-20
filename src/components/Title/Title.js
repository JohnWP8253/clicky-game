import React from "react";
import "./Title.css";

const styles = {
  title: {
    background: "url('./images/Captain-Phasma.jpg')",
    backgroundSize: "100% auto",
    color: "#fff",
    minHeight: "400px",
    padding: "180px 20px",
    paddingBottom: "140px",
    textAlign: "center",
    borderBottom: "1px solid #fff"
  },
};

const Title = (props) => (
  
    <div className="title" style={styles.title}>
      <h1>{props.children}</h1>
      <p className="subtitle">{props.subtitle}</p>
    </div>

);

export default Title;
