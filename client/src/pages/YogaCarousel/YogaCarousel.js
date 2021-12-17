import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Component } from "react";
import example from "../../assets/images/example.jpeg";

class YogaCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSlide: 0,
      autoPlay: true,
      interval: 1000,
    };
  }

  next = () => {
    this.setState((state) => ({
      currentSlide: state.currentSlide + 1,
    }));
  };

  prev = () => {
    this.setState((state) => ({
      currentSlide: state.currentSlide - 1,
    }));
  };

  changeAutoPlay = () => {
    this.setState((state) => ({
      autoPlay: !state.autoPlay,
    }));
  };

  updateCurrentSlide = (index) => {
    const { currentSlide } = this.state;

    if (currentSlide !== index) {
      this.setState({
        currentSlide: index,
      });
    }
  };

  render() {
    return (
      <div>
        <div>
          <button onClick={this.prev}>Prev</button>
          <button onClick={this.next}>Next</button>
          <button onClick={this.changeAutoPlay}>
            Toggle Autoplay ({this.state.autoPlay ? "true" : "false"})
          </button>
        </div>
        <Carousel
          autoPlay={this.state.autoPlay}
          selectedItem={this.state.currentSlide}
          onChange={this.updateCurrentSlide}
          interval={this.state.interval}
        >
          {this.props.practiceList.map((pose) => {
            return (
              <div key={pose.id}>
                <img src={example} />
                <p className="legend">{pose.name}</p>
              </div>
            );
          })}
        </Carousel>
      </div>
    );
  }
}

export default YogaCarousel;
/* function YogaCarousel(props) {
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
export default YogaCarousel;*/
