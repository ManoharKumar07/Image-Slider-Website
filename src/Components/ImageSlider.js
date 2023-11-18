import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useState, useEffect } from "react";
import { getDocs } from "firebase/firestore";
import { imageRef } from "../Firebase/firebase";

const ImageSlider = () => {
  const [images, setImage] = useState([]);
  // we are using useEffect to fetch data from our database
  const [currentIndex, setCurrentIndex] = useState(0);

  // using useEffect to fetch data from the database
  useEffect(() => {
    async function getData() {
      const _data = await getDocs(imageRef);
      const imageData = _data.docs.map((doc) => doc.data());
      setImage(imageData);
      setCurrentIndex(imageData.length - 1);
    }

    getData();
  }, []);

// For auto sliding of images
useEffect(()=>{
  const autoSlider = setInterval(()=>{handleNextSlide();
  },3000);
 return ()=>clearInterval(autoSlider);
},[currentIndex]);

  // to avoid the error when there is data in the image array
  if (images.length === 0 || currentIndex >= images.length) {
    return null;
  }

  //  to display the image of specific index
  const image = images[currentIndex];

  // handling previous image button
  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
    });
  };

  // handling next image button
  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
    });
  };
  // handling dots for navigation for both previous and next images
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="Image-Container">
      {/* Displaying image */}
      <div className="imagebox ">
        <div className="im">
          <img
            key={currentIndex}
            src={image.imagelink}
            alt="pic"
            className="animation-img"
          />
        </div>
        <div className="description animation-img">{image.description}</div>
      </div>

      {/* the previous image button */}
      <a
        className="prev transition duration-150 ease-out hover:ease-in"
        onClick={handlePrevSlide}
      >
        <ArrowBackIosIcon />
      </a>
      {/* the  next image button */}
      <a
        className="next transition duration-150 ease-out hover:ease-in"
        onClick={handleNextSlide}
      >
        <ArrowForwardIosIcon />
      </a>

      {/* Dot navigation */}
      <div className="dot-container">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
