import React from "react";

//Functional Component
const Product = (props) => {
  return (
    <div>
      <h3>
        I'm a {props.name}. I cost {props.cost}
      </h3>
      <p>{props.children}</p>
    </div>
  );
};

export default Product;
