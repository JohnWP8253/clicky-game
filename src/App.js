import React, { Component } from 'react';
import ImperialCard from "./components/ImperialCard";
import Nav from "./components/Nav";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import stormtroopers from "./stormtroopers.json";
import "./App.css";


class App extends Component {
  // Setting this.state.stormtrooper to the stormtrooper json array
  state = {
    stormtroopers: stormtroopers,
    clicked: [],
    score: 0,
    hiScore: 0,
    message: "Click a helmet to begin!"
  };

  handleShuffleArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i++) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  handleClick = (id) => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.setState(
        {
        stormtroopers: stormtroopers,
        clicked: this.state.clicked.concat(id),
        score: this.state.score + 1,
        hiScore: (this.state.hiScore > this.state.score) ? this.state.hiScore : this.state.hiScore + 1,
        message: "The Force is strong with you!"
        }
      );
    } else {
      this.setState(
        {
          stormtroopers: stormtroopers,
          clicked: [],
          score: 0,
          topScore: (this.state.score > this.state.hiScore) ? this.state.score : this.state.hiScore,
          message: "There is a disturbance in the Force!"
        }
      );
    }
    this.handleShuffleArray(stormtroopers);
  }

  render() {
    return (
      <Wrapper>
        <Nav
        brand="Clicky Game"
        message={this.state.message}
        score={this.state.score}
        hiScore={this.state.hiScore}
        />

        <Title subtitle="Click on a helmet to earn points, but don't click on any more than once!">Clicky Game: The Stormtrooper Edition</Title>
        {this.state.stormtroopers.map(stormtroopers => (
          <ImperialCard
          handleClick={this.handleClick}
          id={stormtroopers.id}
          key={stormtroopers.id}
          name={stormtroopers.name}
          message={this.state.message}
          image={stormtroopers.image}
          score={this.state.score}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App();
