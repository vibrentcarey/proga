import React, { useState, useEffect } from "react";
import YogaCarousel from "../../components/YogaCarousel/YogaCarousel";
import YogaList from "../../components/YogaList/YogaList";
// import { getRandomRec } from "../../utitilies/apiRequests";
import "./RecommendedPractice.scss";
import axios from "axios";
const baseURL = "http://localhost:8080";

const RecommendedPractice = () => {
  useEffect(async () => {
    try {
      let response = await axios.get(`${baseURL}/`);
      let data = response.data;
      setData(data);
    } catch (e) {
      console.log(e);
    }
  }, []);

  const [isPracticing, setIsPractice] = useState(false);
  //const [hasData, setHasData] = useState(false);
  const [data, setData] = useState([]);

  const handleStart = () => {
    setIsPractice(true);
  };

  return (
    <main className="box">
      {/*     {!hasData && <h1>Loading</h1>} */}
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
