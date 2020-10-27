import React from "react";

const Info = () => {
  const shirtName = (
    <div className="shirtName">
      <div>
        <h1 className="big">100% Berean</h1>
        <span className="new">new</span>
      </div>
      <h3 className="small">Unisex T-Shirt</h3>
    </div>
  );

  const description = (
    <div className="description">
      <h3 className="title">Product Info</h3>
      <p className="text">
Every day, Every way.  <br/>"Be like the Berean's..." Paul said<br/>For the <i>refined</i> Athey Creek.
      </p>
    </div>
  );

  const ColorContainer = (
    <div className="color-container">
      <h3 className="title">Color</h3>
      <div className="colors">
        <span className="color active" primary="#93cace" color="blue"></span>
        <span className="color" primary="#444" color="grey"></span>
        <span className="color" primary="#000" color="black"></span>
      </div>
    </div>
  );

  const SizeContainer = (
    <div className="size-container">
      <h3 className="title">size</h3>
      <div className="sizes">
        <span className="size">SM</span>
        <span className="size">M</span>
        <span className="size active">L</span>
        <span className="size">XL</span>
        <span className="size">XXL</span>
      </div>
    </div>
  );

  const BuySection = (
    <div className="buy-price">
      <a href="/#" className="buy">
        <i className="fas fa-shopping-cart"></i>Add to cart
      </a>
      <div className="price">
        <i className="fas fa-dollar-sign"></i>
        <h1>19.99</h1>
      </div>
    </div>
  );

  return (
    <div className="info">
      {shirtName}
      {description}
      {ColorContainer}
      {SizeContainer}
      {BuySection}
    </div>
  );
};

export default Info;
