import { Component } from "react";

class ComponentTest extends Component {
  constructor() {
    super();

    this.state = {
      name: "Matt"
    };
  }

  render() {
    return <div>{this.state.name}</div>;
  }
}

export default ComponentTest;
