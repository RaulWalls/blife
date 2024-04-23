import React, { useEffect, useRef, useState } from "react";
import { product } from "./product";
import '../css/Carousel.css';

function Carousel(props) {
  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const listNode = listRef.current;
    const imgNode = listNode.querySelectorAll("li > img")[currentIndex];

    if (imgNode) {
      imgNode.scrollIntoView({
        behavior: "smooth"
      });
    }
  }, [currentIndex]);

  const scrollToImage = (direction) => {
    if (direction === 'prev') {
      setCurrentIndex(curr => {
        const isFirstSlide = currentIndex === 0;
        return isFirstSlide ? 0 : curr - 1;
      })
    } else {
      const isLastSlide = currentIndex === product.length - 1;
      if (!isLastSlide) {
        setCurrentIndex(curr => curr + 1);
      }
    }
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  }
  return (
    <div className="carousel-container">
      <div className="slider-container">
        <div className="slider-images">
          <ul ref={listRef}>
            {
              product.map((item) => {
                return <li key={item.id}>
                  {/* <img src={item.imgUrl} className="product-img"/> */}
                  <img src={require(`../img/${props.product}.png`)} className="product-img"/>
                </li>
              })
            }
          </ul>
        </div>
      </div>
      <div className="dots-slider">
        {
          product.map((_, idx) => (
            <div key={idx} className={`dot-container-item ${idx === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(idx)}>
              &#9679;
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Carousel;