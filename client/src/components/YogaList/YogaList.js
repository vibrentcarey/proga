import example from "../../assets/images/example.jpeg";
import Card from "../Card/Card";
import "./YogaList.scss";

function YogaList(props) {
  const baseURL = "http://localhost:8080";
  return (
    <Card className="pose-container">
      <h2 className="pose-title">Your Yoga Practice For Today</h2>
      {props.data.map((pose) => {
        return (
          <article key={pose.id} className="pose">
            <img
              className="pose__image"
              src={`${baseURL}/${pose.image}`}
              alt=""
            />
            <h3 className="pose__name">{pose.name}</h3>
            <div className="pose__intro">
              {pose.bodyPart.map((part, index) => (
                <span key={`${part}-${index}`}>{part}</span>
              ))}
              <span>{pose.level}</span>
            </div>
            {/*    <p className="pose__description">{pose.description}</p> */}
          </article>
        );
      })}
    </Card>
  );
}

export default YogaList;
