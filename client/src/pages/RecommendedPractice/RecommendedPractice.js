import React, { useState } from "react";
import YogaCarousel from "../../components/YogaCarousel/YogaCarousel";
import YogaList from "../../components/YogaList/YogaList";
import "./RecommendedPractice.scss";

const RecommendedPractice = () => {
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

  const [isPracticing, setIsPractice] = useState(false);

  const handleStart = () => {
    setIsPractice(true);
  };

  return (
    <main className="box">
      {!isPracticing && (
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
};

export default RecommendedPractice;
