import "./Home.css";
import Header from "../components/Header";
import React from "react";
import EU from "../Images/EN V Co-funded by_POS.png";

const Home = () => {
  document.documentElement.style.setProperty(
    "--window-width",
    `${window.innerWidth}px`
  ); //enables the use of the current viewport width in the CSS file
  document.documentElement.style.setProperty(
    "--window-height",
    `${window.innerHeight}px`
  ); //enables the use of the current viewport height in the CSS file

  return (
    <div className="home">
      <Header />
      <section className="content">
        <h1>Hello!</h1>
        <p>
          This is the prototype of Erasmus+ ChatLearn PM Tutor for project management. We are developing PM Tutor aiming
          at providing you with an engaging and personalized learning journey in the realm of Project Management. You can
          find more information about PM Tutor by clicking "Help" on the menu.
        </p>
        <p>
          <b>To interact with the tutor, click "PM Tutor" on the menu.</b>
        </p>
        <p>
          To protect your chat history from others who use the same machine, it is a good practice to logout after
          the interaction.
        </p>
        <p>
          Please use Chrome or Edge on a laptop or desktop for better user experience.
        </p>
        <p>
          Let's get started!
        </p>
        <img
          className="Eu-logo"
          src={EU}
          alt="Co-funded by the European Union"
        />
      </section>
    </div>
  );
};

export default Home;
