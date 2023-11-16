import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useState, useEffect } from "react";

const ImageSlider = () => {
  const [images, setImage] = useState([
    {
      imagelink:
        "https://images.pexels.com/photos/3934023/pexels-photo-3934023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "River House",
    },
    {
      imagelink:
        "https://images.pexels.com/photos/3762284/pexels-photo-3762284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "River House",
    },
    {
      imagelink:
        "https://images.pexels.com/photos/3934023/pexels-photo-3934023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "River House",
    },
    
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex)=>{
       return prevIndex === 0 ? images.length - 1: prevIndex-1});
  };
  const handleNextSlide = () => {
    setCurrentIndex((prevIndex)=> {
      return prevIndex === images.length - 1 ? 0: prevIndex+1});
  };
  const handleDotClick = (index) => {
    setCurrentIndex(index)
  };
   var image =images[currentIndex];
  return (
    <div className="Image-Container">
       
        <div  className="imagebox ">
        <div className="im">
          <img  key={currentIndex} src={image.imagelink} alt="image" className="animation-img"/>
          </div>
          <div className="description animation-img">{image.description}</div>
        </div>
      
      <a
        className="prev transition duration-150 ease-out hover:ease-in"
        onClick={handlePrevSlide}
      >
        <ArrowBackIosIcon />
      </a>
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
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      
      </div>
    </div>
  );
};

export default ImageSlider;
