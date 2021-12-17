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
                <p className="pose__intro__body" key={`${part}-${index}`}>{part}</p>
              ))}
              <p>{pose.level}</p>
            </div>
            {/*    <p className="pose__description">{pose.description}</p> */}
          </article>
        );
      })}
    </Card>
  );
}

export default YogaList;
