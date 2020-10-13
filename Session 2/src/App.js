import React, { Component } from "react";
import Product from "./components/Product";

class App extends Component {
  state = {
    product: ["TV", "Telephone", "Geyser"],
    header: "Total Cost : 100",
  };
  switchNameHandler = () => {
    this.setState({
      product: ["Laptop", "Telephone", "Blah"],
    });
  };
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Product name={this.state.product[0]} cost="56">
          I cost 15k
        </Product>
        <Product name={this.state.product[1]}></Product>
        <Product name={this.state.product[2]}></Product>
        <p>{this.state.header}</p>
      </div>
    );
  }
}

export default App;
