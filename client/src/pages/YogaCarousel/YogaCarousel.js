import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import example from "../../assets/images/example.jpeg";

function YogaCarousel(props) {
  return (
    <Carousel>
      {props.practiceList.map((pose) => {
        return (
          <div key={pose.id}>
            <img src={example} />
            <p className="legend">{pose.name}</p>
          </div>
        );
      })}
    </Carousel>
  );
}

export default YogaCarousel;
