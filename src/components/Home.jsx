import React from "react";
import "./Home.css";
import cementImage from "../assets/cement.jpg"; // replace with your image

const Home = () => {
  return (
    <section
      className="home" id="home"
      style={{ backgroundImage: `url(${cementImage})` }}
    >
      <div className="overlay">
        <div className="home-content">
          <h1 className="home-heading">
            BHARATH <span className="cement-text">CEMENT</span>
          </h1>
          <p className="home-description">
            Trusted Name in Construction Materials <br />
            Phone – 0490 2388547 | Mobile – 9447716454 <br />
            Located in Kadirur, Kannur, Kerala
          </p>
          <div className="home-buttons">
            <button className="btn-quote">Get a Quote</button>
            <button className="btn-product">Our Product</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
