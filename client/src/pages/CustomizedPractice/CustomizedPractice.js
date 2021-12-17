import React, { useState } from "react";
import YogaList from "../../components/YogaList/YogaList";
import YogaCarousel from "../YogaCarousel/YogaCarousel";
import Card from "../../components/Card/Card";
import "./CustomizedPractice.scss";

function CustomizedPractice() {
  const data = [
    {
      id: 1,
      name: "Child Pose",
      description: "Back Stretch",
      bodyPart: ["back", "legs"],
      image: "",
      level: "beginner",
    },
    {
      id: 2,
      name: "Cobra",
      description: "Back Stretch",
      bodyPart: ["back", "legs"],
      image: "",
      level: "advanced",
    },
    {
      id: 3,
      name: "Triangle",
      description: "Back Stretch",
      bodyPart: ["back", "legs"],
      image: "",
      level: "advanced",
    },
  ];

  const [isChoosingPractice, setIsChoosingPractice] = useState(true);
  const [isStarting, setIsStarting] = useState(false);
  const [isPracticing, setIsPractice] = useState(false);
  const handleCustomizeForm = (e) => {
    e.preventDefault();
    // api request
    setIsChoosingPractice(false);
    setIsStarting(true);
  };

  const handleStart = () => {
    setIsStarting(false);
    setIsPractice(true);
  };

  return (
    <main className="container">
      {isChoosingPractice && (
        <Card className="form-card">
          <form className="cus-form" onSubmit={handleCustomizeForm}>
            <h1>Customize Your Yoga Practice</h1>
            <p className="cus-form__heading">
              Which body part that you want to work with Today:
            </p>
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
            <div className="cus-form__level">
              <label htmlFor="level">
                Which level of practice you are looking for:
              </label>
              <select id="level">
                <option value="beginner">Beginner</option>
                <option value="advance">Advance</option>
              </select>
            </div>
            <button className="cus-form__btn">Customize</button>
          </form>
        </Card>
      )}
      {isStarting && (
        <section className="overview">
          <button className="overview__btn" onClick={handleStart}>
            Start
          </button>
          <YogaList data={data} />
        </section>
      )}
      {isPracticing && (
        <section>
          <YogaCarousel practiceList={data} />
        </section>
      )}
    </main>
  );
}

export default CustomizedPractice;
