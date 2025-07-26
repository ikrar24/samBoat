import React from "react";
import rental1 from "../../assets/rental1.jpg";
import rental2 from "../../assets/rental2.jpg";
import rental3 from "../../assets/rental3.jpg";
import rental4 from "../../assets/rental4.jpg";
import rental5 from "../../assets/rental5.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const rentalImgAndTex = [
  { src: rental1, text: "Sailboat" },
  { src: rental2, text: "RIB" },
  { src: rental3, text: "Moter" },
  { src: rental4, text: "Catamran" },
  { src: rental5, text: "Canal" }
];

// Slider settings
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3, // 👈 You can set 1, 2, or 3 based on your design
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 }
    },
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 }
    }
  ]
};

function Rental() {
  return (
    <section className="mt-10 flex flex-col items-center justify-center">
      <h3 className="text-3xl font-semibold">
        Rental a boat for any occasion
      </h3>


      <div className="w-full mt-6 px-4 max-w-[1100px]">
        <Slider {...settings}
          appendDots={dots => (
            <div>
              <ul className="flex justify-center gap-2  ">{dots}</ul>
            </div>
          )}
          customPaging={i => (
            <div className="w-3 h-3 bg-[rgba(7,71,79,1)] rounded-full transition-all duration-300 hover:bg-[rgba(251,194,90,1)]" />
          )}
        >
          {rentalImgAndTex.map((item, index) => (
            <div key={index} className="px-2 flex gap-3">
              <div
                className="bg-no-repeat bg-cover bg-center w-[200px] h-[180px] flex items-center justify-center text-4xl text-white font-bold rounded-xl shadow-md mx-auto  "
                style={{ backgroundImage: `url(${item.src})` }}
              >
                {item.text}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Rental;
