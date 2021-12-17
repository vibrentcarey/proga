import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

// body part switch to checkbox

function CustomizedPractice() {
  return (
    <main>
      <section>
        <h1>Customize Your Yoga Practice</h1>
        <div>
          <p> Choose a body part that you want to work on:</p>
          <div>
            <div>
              <label htmlFor="back"> Lower Back</label>
              <input id="back" type="checkbox" value="lower-back"></input>
            </div>
            <div>
              <label htmlFor="upper"> Upper</label>
              <input id="upper" type="checkbox" value="upper"></input>
            </div>
            <div>
              <label htmlFor="leg"> Leg </label>
              <input id="leg" type="checkbox" value="leg"></input>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="level">Choose your level:</label>
          <select id="level">
            <option value="beginner">Beginner</option>
            <option value="advance">Advance</option>
          </select>
        </div>
      </section>
      <section>
        <article>
          <h2>Your Customized Yoga Practice For Today</h2>
        </article>
      </section>
    </main>
  );
}

export default CustomizedPractice;
