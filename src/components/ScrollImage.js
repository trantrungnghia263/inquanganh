import React, { useEffect } from "react";

//COMPONENT
import AutoScrollImage from "./AutoScrollImage";

//AOS ANIMATION
import AOS from "aos";

//Calling WOWjs
import WOW from "wowjs";

function ScrollImage() {
  const arrImages = [
    {
      imageSrc: "https://i.ibb.co/fYJLNVsD/standee-60x160cm-1.jpg",
      title: "Standee sale",
    },
    {
      imageSrc: "https://i.ibb.co/jZL6CXQw/standee-60x160cm-01.jpg",
      title: "Standee du học",
    },
    {
      imageSrc: "https://i.ibb.co/vxpmtB1d/standee-60x160cm-3.jpg",
      title: "Standee tuyển nhân lực",
    },
    // Add more images as needed
  ];

  useEffect(() => {
    AOS.init({ duration: 300 });
  }, []);

  useEffect(() => {
    const wow = new WOW.WOW({
      live: false,
    });
    wow.init();
  }, []);

  return (
    <div className="scroll-image py-10">
      <div className="container">
        <div className="scroll-image__wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {arrImages.map((item, index) => (
            <div
              key={index}
              className="scroll-image__item wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <AutoScrollImage imageSrc={item.imageSrc} title={item.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ScrollImage;
