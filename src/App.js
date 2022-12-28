import react from "react";
import Child from "./Child";
import "./styles.css";

export default class App extends react.Component {
  constructor() {
    super();
    this.state = {
      name: "Hello React Class Component",
      value: 0,
      count: 0
    };
  }
  render() {
    const handleIncrement = () => {
      this.setState({ value: this.state.value + 1 });
    };
    const handleDecrement = () => {
      this.setState({ value: this.state.value - 1 });
    };
    const handleParentCounter = () => {
      this.setState({ count: this.state.count + 1 });
    };
    return (
      <>
        <h1>{this.state.name}</h1>
        <button onClick={handleParentCounter}>{this.state.count}</button>
        <button onClick={handleIncrement}>Clicke for Increment</button>
        <button onClick={handleDecrement}>Clicke for Decrement</button>
        <Child value={this.state.value} />
      </>
    );
  }
}
