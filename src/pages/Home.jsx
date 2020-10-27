import React, { useEffect } from "react";
import Gradients from "../components/Gradients";
import ProductImages from "../components/ProductImages";
import Info from "../components/Info/Info";

import logo from "../assets/img/logo.png";

const Home = () => {
  var sizes, colors, shirts, gradients, shirtBackground, shirtHeight;
  var prevColor = "blue";
  var animateOrNot = true;

  function changeColor() {
    if (!animateOrNot) {
      console.log("waittttt");
      return;
    }
    var primary = this.getAttribute("primary");
    var color = this.getAttribute("color");
    var shirt = document.querySelector(`.shirt[color="${color}"]`);
    var gradient = document.querySelector(`.gradient[color="${color}"]`);
    var prevGradient = document.querySelector(
      `.gradient[color="${prevColor}"]`
    );

    // showing correct color
    colors.forEach(color => color.classList.remove("active"));
    this.classList.add("active");

    // changing primary css variable
    document.documentElement.style.setProperty("--primary", primary);

    // showing correct img
    shirts.forEach(s => s.classList.remove("show"));
    shirt.classList.add("show");

    // dealing with gradient
    gradients.forEach(g => g.classList.remove("display", "behind"));
    prevGradient.classList.add("behind");
    gradient.classList.add("display");

    // logic
    prevColor = color;
    animateOrNot = false;

    // hack
    setTimeout(() => {
      animateOrNot = true;
    }, 800);
  }

  function changeSize() {
    sizes.forEach(size => size.classList.remove("active"));
    this.classList.add("active");
  }

  // for responsive behaviour
  const changeHeight = () => {
    var x = window.matchMedia("(max-width:1000px)");

    !shirts ? (shirtHeight = 0) : (shirtHeight = shirts[0].offsetHeight);

    if (x.matches) {
      if (shirtHeight === 0) {
        try {
          setTimeout(changeHeight, 50);
        } catch (error) {
          alert("Something is Wrong!!");
        }
      }
      shirtBackground.style.height = `${shirtHeight * 0.9}px`;
    } else if (!!shirtBackground) {
      // go back to default
      shirtBackground.style.height = "475px";
    }
  };

  useEffect(() => {
    sizes = document.querySelectorAll(".size");
    colors = document.querySelectorAll(".color");
    shirts = document.querySelectorAll(".shirt");
    gradients = document.querySelectorAll(".gradient");
    shirtBackground = document.querySelector(".shirtBackground");

    colors.forEach(color => color.addEventListener("click", changeColor));
    sizes.forEach(size => size.addEventListener("click", changeSize));
    changeHeight();
  }, []);
  window.addEventListener("resize", changeHeight);

  return (
    <div className="Home">
      <div className="container">
        <div className="card">
          <div className="shirtBackground">
            <Gradients />

            <img src={logo} alt="logo" className="logo" />
            <i onClick={() => alert('Test share link!')} className="share">
              <i className="fas fa-share-alt"></i>
            </i>

            <ProductImages />
          </div>
          <Info />
        </div>
      </div>
    </div>
  );
};

export default Home;
