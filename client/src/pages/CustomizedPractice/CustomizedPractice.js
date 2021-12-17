import React, { useState } from "react";
import YogaList from "../../components/YogaList/YogaList";
import YogaCarousel from "../../components/YogaCarousel/YogaCarousel";
import { Link } from "react-router-dom";
import axios from "axios";
import HomeIcon from "../../components/HomeIcon/HomeIcon";
import Card from "../../components/Card/Card";
import "./CustomizedPractice.scss";

function CustomizedPractice() {
  const baseURL = "http://localhost:8080";

  const [isChoosingPractice, setIsChoosingPractice] = useState(true);
  const [isStarting, setIsStarting] = useState(false);
  const [isPracticing, setIsPractice] = useState(false);
  const [Data, setData] = useState([]);
  const [checkboxData, setCheckboxData] = useState([
    { id: 100, name: "back", isChecked: true },
    { id: 200, name: "legs", isChecked: false },
    { id: 300, name: "upper", isChecked: false },
  ]);

  const checkboxChangeCheck = (id) => {
    let temp = [...checkboxData];
    const index = temp.findIndex((option) => option.id === id);
    if (index === -1) return;
    temp[index].isChecked = !temp[index].isChecked;
    setCheckboxData(temp);
  };

  const handleCustomizeForm = (e) => {
    e.preventDefault();
    // api request
    let neededCheckboxValue = [];
    let checkboxValue = checkboxData.forEach((item) => {
      if (item.isChecked === true) {
        neededCheckboxValue.push(item.name);
      }
    });

    console.log(e.target.level.value, checkboxValue);
    axios
      .post(`${baseURL}/specific`, {
        level: e.target,
        bodyPart: neededCheckboxValue,
      })
      .then((res) => setData(res.data))
      .catch((e) => console.log(e));
    setIsChoosingPractice(false);
    setIsStarting(true);
  };

  const handleStart = () => {
    setIsStarting(false);
    setIsPractice(true);
  };

  return (
    <main className="container">
      <Link to="/">
        <HomeIcon className="home-link" />
      </Link>
      {isChoosingPractice && (
        <Card className="form-card">
          <form className="cus-form" onSubmit={handleCustomizeForm}>
            <h1>Customize Your Yoga Practice</h1>
            <p className="cus-form__heading">
              Which body part that you want to work with Today:
            </p>
            <div>
              {checkboxData.map((li, index) => (
                <div key={index}>
                  <input
                    type="checkbox"
                    checked={li.isChecked}
                    onChange={() => {
                      checkboxChangeCheck(li.id);
                    }}
                  />
                  <label htmlFor={li.name}>{li.name}</label>
                </div>
              ))}
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
          <YogaList data={Data} />
        </section>
      )}
      {isPracticing && (
        <section className="carousel">
          <YogaCarousel practiceList={Data} />
        </section>
      )}
    </main>
  );
}

export default CustomizedPractice;
