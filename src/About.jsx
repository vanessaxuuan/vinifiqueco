import './About.css'; // Import the CSS file for styling

const AboutUs = () => {

  return (
    <div className="about-us" id="about">
      {/* <div className="about-bg-pc img-pc"><img width={"100%"} height={"100%"} src="/about-mb.png" loading="lazy" /></div>
      <div className="about-bg-mb img-m"><img width={"100%"} height={"100%"} src="/about-mb.png" loading="lazy" /></div> */}
      <div className="about-content">
        {/* <div className='about-1'>VINIFIQUE</div> */}
        <div className='about-2'>Dedicated To Bringing You The Finest Wines Crafted By Family-Run Wineries</div>
        <div className='about-gallery'>
        <div className='about-3'><img width={"100%"} height={"100%"} src="/vineyard2.jpg" loading="lazy" /></div>
        <div className='about-3'><img width={"100%"} height={"100%"} src="/vineyard3.jpg" loading="lazy" /></div>
        <div className='about-3'><img width={"100%"} height={"100%"} src="/vineyard4.jpg" loading="lazy" /></div>
        </div>
        <div className='about-4'>Sourcing <b>Exclusively</b> From wineries Known For Their Regional Expertise And Long Standing Success. Our Focus Is On <b>Connecting</b> You With The Most Exceptional Wines</div>
        {/* <div className='about-5'>Our Focus Is On Connecting You With The Most Exceptional Wines</div> */}
        {/* <div className='about-6'></div> */}
      </div>
    </div>
  );
};

export default AboutUs;