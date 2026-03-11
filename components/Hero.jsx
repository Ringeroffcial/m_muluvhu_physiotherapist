import React from "react";
import therapistImage from "../src/assets/Me.jpg"; // add the owner's image here

const Hero = () => {

  const handleBookClick = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleLearnMore = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">

        {/* LEFT SIDE TEXT */}
        <div className="hero-text">

          <h1 className="hero-title">
            Welcome to <span className="highlight">Muluvhu's Physiotherapy Abode</span>
          </h1>

          <h2 className="hero-greeting">
            Hi there 👋 I'm <span className="highlight">Muluvhu</span>, here to assist you.
          </h2>

          <p className="hero-subtitle">
            Expert care for pain relief, rehabilitation, and optimal physical health.
            Helping you move better and live a healthier life.
          </p>

          {/* <div className="hero-cta">
            <button className="btn-primary" onClick={handlekClick}>
              Book Appointment
            </butBooton>

            <button className="btn-secondary" onClick={handleLearnMore}>
              Our Services
            </button>
          </div> */}

        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="hero-image">
          <img src={therapistImage} alt="Muluvhu Physiotherapist" />
        </div>

      </div>
    </section>
  );
};

export default Hero;