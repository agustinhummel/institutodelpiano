import React, { useState,useEffect} from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Swipe from "react-easy-swipe";

const Carousel= ({urlsData,styles}) => {
    
    const [state, setState] = useState({     
         currentSlide: 0,
        paused: false,});

useEffect(() => {

}, []);

  let nextSlide = () => {
    let newSlide =
      state.currentSlide === urlsData.length - 1
        ? 0
        : state.currentSlide + 1;
    setState({ currentSlide: newSlide });
  };

  let prevSlide = () => {
    let newSlide =
      state.currentSlide === 0
        ? urlsData.length - 1
        : state.currentSlide - 1;
    setState({ currentSlide: newSlide });
  };

  let setCurrentSlide = (index) => {
    setState({ currentSlide: index });
  };


    return (
      <div >
        <div className={styles?.container===undefined ? "w-[100%] h-auto flex overflow-hidden relative" : `${styles.container}`}>
          <AiOutlineLeft
            onClick={prevSlide}
            className="absolute left-0 text-3xl inset-y-1/2 text-white cursor-pointer"
          />

          <Swipe onSwipeLeft={nextSlide} onSwipeRight={prevSlide}>
            {urlsData.map((slide, index) => {
              return (
                <img
                  src={slide}
                  alt="This is a carousel slide"
                  key={index}
                  className={
                    index === state.currentSlide
                      ? styles?.slice===undefined ? "block w-full h-auto object-cover p-1 bg-white border rounded" : `${styles.showSlice}`
                      : "hidden"
                  }
                />
              );
            })}
          </Swipe>

          <div className="absolute w-full flex justify-center bottom-0">
            {urlsData.map((element, index) => {
              return (
                <div
                  className={
                    index === state.currentSlide
                      ? "h-2 w-2 bg-blue-700 rounded-full mx-2 mb-2 cursor-pointer"
                      : "h-2 w-2 bg-white rounded-full mx-2 mb-2 cursor-pointer"
                  }
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index);
                  }}
                ></div>
              );
            })}
          </div>

          <AiOutlineRight
            onClick={nextSlide}
            className="absolute right-0 text-3xl inset-y-1/2 text-white cursor-pointer"
          />
        </div>
      </div>
    );
  }


export default Carousel;