import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";

interface VerticalCarouselProps {
  items: string[];
}

const VerticalCarousel: React.FC<VerticalCarouselProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const sliderRef = useRef<Slider | null>(null);
  const isMobile = () => {
    return window.innerWidth <= 768; // Consider screen width <= 768px as mobile
  };
  
  const settings = {
    dots: false,
    infinite: true,
    vertical: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    
    verticalSwiping: true,
    swipeToSlide: true,
    arrows: false,
    autoplay: false,
    centerMode: true, // Ensure middle slide is active
    centerPadding: isMobile() ? "0px" : "0px",
    beforeChange: (current: number, next: number) => setActiveIndex(next), // Update active slide index
  };

  useEffect(() => {
    const slider = sliderRef.current;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault(); // Prevent scrolling of parent
      if (e.deltaY < 0) {
        slider?.slickPrev(); // Scroll up
      } else {
        slider?.slickNext(); // Scroll down
      }
    };

    const sliderDiv = document.querySelector(".vertical-carousel-container");

    if (sliderDiv) {
      // Adding the event listener with proper type casting
      sliderDiv.addEventListener("wheel", handleWheel as EventListener, {
        passive: false,
      });
    }

    return () => {
      if (sliderDiv) {
        sliderDiv.removeEventListener("wheel", handleWheel as EventListener);
      }
    };
  }, []);

  return (
    <div className="vertical-carousel-container">
      <Slider ref={sliderRef} {...settings}>
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${
              index === activeIndex ? "active" : "inactive"
            }`}
          >
            <div className="name">{item}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VerticalCarousel;
