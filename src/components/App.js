import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false,
      posi: 0,
      ballPosition: { left: "0px" }
    };
    this.renderChoice = this.renderChoice.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.keyDown = this.keyDown.bind(this);
  }

  buttonClickHandler() {
    this.setState({ renderBall: !this.state.renderBall });
  }

  renderChoice() {
    if (this.state.renderBall) {
      return <div className="ball" style={this.state.ballPosition}></div>;
    } else
      return (
        <button onClick={this.buttonClickHandler}>Click For One Ball</button>
      );
  }

  //bind ArrowRight keydown event

  keyDown(el) {
    if (el.keyCode === 39) this.setState({ ballPosition: { left: "5px" } });
  }

  componentDidMount() {
    window.addEventListener("keydown", (el) => this.keyDown(el));
  }

  render() {
    return <div className="playground">{this.renderChoice()}</div>;
  }
}

export default App;
