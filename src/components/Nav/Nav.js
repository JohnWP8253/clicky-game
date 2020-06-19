import React from 'react';
import "./Nav.css";

const Nav = props => {

    const messageClass = () => {
        if (props.message === "The Force is stong with you!") {
            return "correct";
        } else if (
            props.message === "There is a disturbance in the force!") {
                return "incorrect";
            }
    }

    return (
        <nav className="navbar">
            <ul>
                <li className="brand">
                    {props.brand}
                </li>
                <li id="message" className={messageClass()}>
                    {props.message}
                </li>
                <li> 
                    <span className="score"> Score: {props.score}</span> 
                    <span className="SplitScore">|</span>
                    <span className="score">Top Score: {props.hiScore}</span>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;