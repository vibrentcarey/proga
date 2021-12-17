import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

const home = () => {
  return (
    <main className="main">
      <h1 className="main__logo">Proga</h1>
      <h2 className="main__title">
        Yoga is the journey of the self, through the self, to the self.
      </h2>
      <div className="main__choices">
        <Link to="/customizedpractice">
          <button className="customize">Customized Practice</button>
        </Link>
        <Link to="/recommendpractice" className="recommend">
          <button>Recommended Practice</button>
        </Link>
      </div>
    </main>
  );
};

export default home;
