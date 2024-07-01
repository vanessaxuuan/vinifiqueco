import Header from './Header';
import WineriesSwiper from './Wineries';
import WinesGallery from './Wines';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import AboutUs from './About';
import Footer from './Footer';
import GallerySwiper from './Gallery';

function App() {
  const bannerRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(bannerRef.current, 
      { opacity: 0, y: 100 }, 
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    );
    gsap.fromTo(titleRef.current, 
      { opacity: 0, y: 100 }, 
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    );
    gsap.fromTo(descRef.current, 
      { opacity: 0, y: 100 }, 
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    );
  }, []);
  
  return (
    <>
     <Header />
      <div className='main-banner'>
        <div className='banner-title' ref={bannerRef} >Uncovering A World Of Artisanal Wines</div>
        <div className="img-pc bannerimage">
          <img width={"100%"} height={"100%"} src="/vbannerpc.png" loading="lazy" />
        </div>
        <div className="img-m bannerimage">
          <img width={"100%"} height={"100%"} src="/vbannermb.png" loading="lazy" />
        </div>
      </div>
      <WineriesSwiper />
      <WinesGallery />
      <GallerySwiper />
      <AboutUs />
      <Footer />
    </>
  );
}

export default App;
