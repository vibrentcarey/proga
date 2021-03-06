import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Component, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactAudioPlayer from 'react-audio-player';
import "./YogaCarousel.scss";
import Modal from "../Modal/Modal";
import music from '../../assets/music.mp3'

const baseURL = "http://localhost:8080";

function YogaCarousel(props) {
  const [isRunning, setIsRunning] = useState(true);
  const [showModal, setshowModal] = useState(false)
  const [interval, setInterval] = useState(5000)
  let history = useNavigate();

  const newPoses = [];
  props.practiceList.forEach((pose) => {
    if (pose.repeat) {
      newPoses.push(pose);
      newPoses.push(pose);
    } else {
      newPoses.push(pose);
    }
  });

  const handleSlideChange = (index) => {
    console.log(index);
    if (index === newPoses.length - 1) {
      setIsRunning(false);
      setTimeout(() => {
        setshowModal(true)
        setTimeout(() => {
          history("/");
        }, 5000)
      }, 1000);
    }
  };
  return (
    <>
      {showModal && <Modal />}
      {!showModal &&
        <>
          <div className="top">
            <button className="carousel__button" onClick={() => setIsRunning(!isRunning)}>{isRunning ? 'Disable Autoplay' : 'Enable Autoplay'}</button>
            <ReactAudioPlayer
              src={music}
              autoPlay
              controls
              className="audio"
            />
            <span className="time" onClick={() => setInterval(20000)}>20s</span> <span className="time" onClick={() => setInterval(30000)}>30s</span>
          </div>

          <Carousel autoPlay={isRunning} interval={interval} onChange={handleSlideChange} className="carousel">
            {newPoses.map((pose) => {
              return (
                <div key={pose.id}>
                  <img className="carousel__image" src={`${baseURL}/${pose.image}`} alt={pose.name} />
                  <p className="legend">{pose.name}</p>
                </div>
              );
            })}
          </Carousel> </>}
    </>
  );
}
export default YogaCarousel;

/* class YogaCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSlide: 0,
      autoPlay: false,
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

     if (index === this.props.practiceList.length - 1) {
      history("/");
    }
  };

  render() {
    console.log(this.props);
    return (
      <div className="carousel">
        <div className="carousel__controls">
          <button onClick={this.prev}>Prev</button>
          <button onClick={this.next}>Next</button>
          <button onClick={this.changeAutoPlay}>
            Autoplay ({this.state.autoPlay ? "Yes" : "No"})
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
                <img src={`${baseURL}/${pose.image}`} />
                <p className="legend">{pose.name}</p>
              </div>
            );
          })}
        </Carousel>
      </div>
    );
  }
}

export default YogaCarousel; */
