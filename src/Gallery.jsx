import "./Gallery.css";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const GallerySwiper = () => {
  return (
    <div className="gallery-section">
      <swiper-container
        slides-per-view="2"
        space-between="40"
        loop={true}
        autoplay={true}
      >
        <swiper-slide>
          <div className="slide">
            <div className="slide gallery-img">
              <img
                className="winery-img"
                src={"/square1.jpg"}
                width={"100%"}
                height={"100%"}
              />
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className="slide">
            <div></div>
            <div className="slide gallery-img">
              <img
                className="winery-img"
                src={"/square2.jpg"}
                width={"100%"}
                height={"100%"}
              />
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className="slide">
            <div className="slide gallery-img">
              <img
                className="winery-img"
                src={"/square3.jpg"}
                width={"100%"}
                height={"100%"}
              />
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className="slide">
            <div className="slide gallery-img">
              <img
                className="winery-img"
                src={"/square4.jpg"}
                width={"100%"}
                height={"100%"}
              />
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
  );
};

export default GallerySwiper;
