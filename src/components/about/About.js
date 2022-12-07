import React from "react";
import "./About.css";
import Img1 from "../../assets/1.webp";
import Img2 from "../../assets/7.webp";
import Img3 from "../../assets/9.webp";
function About() {
  return (
    <div className="section container">
      <div className="row">
        <div className="col-6 left-c">
          <h1 data-scroll data-scroll-speed="1" className=" title">
            About Us
          </h1>
          <p className="text-start ">
            We're fashion studio based in california. We create unique designs
            that will blow your mind. We also design unique jewellary pieces.
            Fashion is an ART that can not be grasped by everyone.
            <br />
            <br />
            We are very dedicated to making our products. We offer unique and
            creative products to a wide range of people. We have a variety of
            styles, but for most people, all of the options are in the box. We
            specialize in making things that make you happy.
            <br />
            <br />
            We strive to build on our vision. As a fashion label, we do our best
            to create amazing experiences for all people. We are always looking
            to make something that is easy for everyone.
          </p>
        </div>
        <div className="col-6 right-c">
          <img src={Img1} alt="" className="img-1" />
          <img
            data-scroll
            data-scroll-speed="5"
            src={Img2}
            alt=""
            className="img-2"
          />
          <img
            data-scroll
            data-scroll-speed="-2"
            src={Img3}
            alt=""
            className="img-3"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
