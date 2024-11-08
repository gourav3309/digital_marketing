import React, { useEffect, useState } from "react";
import "./style.css";
import { slideshowText } from "./data";

import image4 from "../../assets/Images/image4.jpg";
import image5 from "../../assets/Images/image5.jpg";
import image6 from "../../assets/Images/image6.jpg";
import image7 from "../../assets/Images/image7.jpg";
import image8 from "../../assets/Images/image8.jpg";
import image9 from "../../assets/Images/image9.jpg";

function Slideshow({ subheadering1, heading, subheading }) {
  const images = [image4, image5, image6,image7,image8,image9];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const words = ["Services","Technology", "Work", "Quality", "Team Support"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);
    return () => clearInterval(wordInterval);
  }, []);

  const renderTextWithAnimation = (text) => {
    const wordsArray = text.split(" ");
    const lastWord = words[currentWordIndex];
    wordsArray[wordsArray.length - 1] = lastWord;
    return (
      <>
        {wordsArray.map((word, index) => (
          <span
            key={index}
            style={{
              display: 'inline-block',
              opacity: 0,
              animation: `fadeIn 0.5s forwards`,
              animationDelay: `${index * 0.5}s`,
            }}
          >
            {word}{' '}
          </span>
        ))}
      </>
    );
  };

  return (
    <section className="home">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="slideshow-text">
              <h6>{(slideshowText.subheadering1)}</h6>
              <h3>{renderTextWithAnimation(slideshowText.heading)}</h3>
              <p>{slideshowText.subheading}</p>
              <button className="btn about-btn mt-5 mb-5">About Us</button>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <img
              src={images[currentImageIndex]}
              className={`img-fluid mt-5 mb-5 home_img_right fade-in`}
              alt="img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Slideshow;
