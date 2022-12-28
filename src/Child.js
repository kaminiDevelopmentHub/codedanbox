import react from "react";

export default class Child extends react.PureComponent {
  constructor() {
    super();
    this.state = {
      componentName: "Child "
    };
  }
  render() {
    console.log(this.props, "child rendering");

    return (
      <div>
        <h1>{this.state.componentName}</h1>
        <h2>{this.props.value}</h2>
      </div>
    );
  }
}
