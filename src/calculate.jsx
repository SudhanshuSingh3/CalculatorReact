import React from "react";
import "./App.css";

class Calculate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { num1: "", num2: "", total: "" };
  }
  add() {
    this.setState({
      total: parseInt(this.state.num1) + parseInt(this.state.num2),
    });
    console.log(this.state);
  }
  subtract() {
    this.setState({
      total: parseInt(this.state.num1) - parseInt(this.state.num2),
    });
    console.log(this.state);
  }
  divide() {
    this.setState({
      total: parseInt(this.state.num1) / parseInt(this.state.num2),
    });
    console.log(this.state);
  }
  multipy() {
    this.setState({
      total: parseInt(this.state.num1) * parseInt(this.state.num2),
    });
    console.log(this.state);
  }
  render() {
    return (
      <div className="mainContainer">
        <h2>Enter any number</h2>
        <input
          type="text"
         // value={this.state.num1}
          onChange={(eve) => {
            console.log(eve.target.value)
           // this.setState({ num1: eve.target.value });
          }}
        />
        <br />
        <br />

        <input
          type="text"
          value={this.state.num2}
          onChange={(eve) => {
            this.setState({ num2: eve.target.value });
          }}
        />
        <br />
        <br />
        <div class="button">
          <button
            onClick={() => {
              this.add();
            }}
          >
            Add{" "}
          </button>
          <button
            onClick={() => {
              this.subtract();
            }}
          >
            Subtract{" "}
          </button>
          <button
            onClick={() => {
              this.multipy();
            }}
          >
            Multiply
          </button>
          <button
            onClick={() => {
              this.divide();
            }}
          >
            Divide
          </button>
        </div>

        <br />

        <input type="text" value={this.state.total} />

        <br />
        <br />
      </div>
    );
  }
}
export default Calculate;
