import ComponentTest from "./ComponentTest";
import { Component } from "react";
import "./styles.css";
import { render } from "react-dom";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Spiderman",
          basicAttack: "35",
          life: "300"
        },
        {
          name: "Batman",
          basicAttack: "60",
          life: "600"
        },
        {
          name: "Ironman",
          basicAttack: "40",
          life: "900"
        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.monsters.map((hero) => (
          <h1>{hero.name}</h1>
        ))}
      </div>
    );
  }
}
export default App;
