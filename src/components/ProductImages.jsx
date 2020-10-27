import React, { Fragment } from "react";

import blue from "../assets/img/shirt-back-blue.png";
import grey from "../assets/img/shirt-back-grey.png";
import white from "../assets/img/shirt-back-white.png";

const ProductImages = () => {
  return (
    <Fragment>
      <img src={blue} alt="blue shirt" className="shirt show" color="blue" />
      <img src={white} alt="white shirt" className="shirt" color="grey" />
      <img src={grey} alt="black shirt" className="shirt " color="black" />
    </Fragment>
  );
};

export default ProductImages;
