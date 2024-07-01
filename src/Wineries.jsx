// src/WineriesSwiper.js
import "./Wineries.css";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { gsap } from 'gsap';
import { useEffect } from 'react';

// Sample winery data
const wineries = [
  {
    name: "chateau haut grelot",
    type: "Type A",
    image: "/w1.png",
  },
  {
    name: "domaine grains d'estuaire",
    type: "Type B",
    image: "/wv2.jpg",
  },
  {
    name: "chateau la cafourche",
    type: "Type C",
    image: "/wineries1.jpg",
  },
  {
    name: "domaine de la cune",
    type: "Type B",
    image: "/wineries2.jpg",
  },
  {
    name: "chateau penaud",
    type: "Type C",
    image: "/w5.png",
  },
];

const WineriesSwiper = () => {

  useEffect(() => {
    const titles = document.querySelectorAll('.winery-name')
    titles.forEach((title) => {
      gsap.fromTo(title, 
        { opacity: 0, y: 100 }, 
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
      );
    })
   
  }, []);

  return (
    <div className="hide-pc wineries-section">
      <swiper-container
      // style={
      //   {
      //   "--swiper-navigation-color": "#fff000", 
      //   "--swiper-pagination-color": "#fff000"
      //   }}
        slides-per-view="1"
        space-between="20"
        scrollbar-clickable="true"
        mousewheel-invert="true"
      >
        {wineries.map((winery, index) => (
          <swiper-slide key={index}>
            <div className="slide">
              <div className="slide slide-img">
                <img
                  className="winery-img"
                  src={winery.image}
                  alt={winery.name}
                  width={"100%"}
                  height={"100%"}
                />
              </div>
              <h2 className="winery-name">{winery.name.toUpperCase()}</h2>
            </div>
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  );
};

export default WineriesSwiper;
