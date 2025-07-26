import React, { useState } from 'react';
import Chevron_Down from "../../assets/Chevron_Down.svg";
import Chevron_Up from "../../assets/Chevron_Up.svg";
import arrow from "../../assets/arrow.svg";

const faqData = [
  {
    q: "Lorem Ipsum?",
    ans: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor."
  },
  {
    q: "Lorem Ipsum?",
    ans: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor."
  },
  {
    q: "Lorem Ipsum?",
    ans: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor."
  }
];

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className=" flex flex-col items-center justify-center mt-10 " >
      <h4 className=" text-3xl font-bold  " >FAQ's</h4>

      {/* q/a box */}
      <div className=" w-[70%] " >

        {
          faqData.map((item, index) => (
            <div className="  " key={index}>

              {/* Questions */}
              <div className="flex w-full justify-between items-center  " onClick={() => toggleAnswer(index)}>
                <p className=" font-semibold ">{item.q} </p>
                <img
                  src={activeIndex === index ? Chevron_Up : Chevron_Down}
                  alt="icon"
                  className="cursor-pointer"
                />
              </div>

              {/* Answer */}
              <p className={` transition-all ${activeIndex === index ? "block" : "hidden"} `}>
                {item.ans}
              </p>

            </div>
          ))
        }

      </div>


      <button className="flex bg-[rgba(7,71,79,1)] text-white p-3
relative rounded-md cursor-pointer gap-2 mt-10 " >
        See all questions <img src={arrow} alt="arrow" className="cursor-pointer" />
      </button>

    </section>
  );
}

export default Faq;
