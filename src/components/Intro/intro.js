import React from "react";
import "./intro.css";
import bg from "../../assests/newdruva.jpg";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello"> Hello</span>
        <span className="introText">
          I'm <span className="introName">Druva M K</span>
          <br></br>Web designer
        </span>
        <div></div>
        <Link>
          <button className="btn">Hire Me</button>
        </Link>
      </div>
      <img src={bg} alt="druva photo" className="bg" />
    </section>
  );
};

export default Intro;
