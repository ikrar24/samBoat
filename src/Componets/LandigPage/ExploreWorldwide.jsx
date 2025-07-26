import React from 'react'
import starpng from "../../assets/starpng.png"
import worldwide1 from "../../assets/worldwide1.jpg"
import worldwide2 from "../../assets/worldwide2.jpg"
import worldwide3 from "../../assets/worldwide3.jpg"
import worldwide4 from "../../assets/worldwide4.jpg"
import worldwidebg from "../../assets/worldwidebg.svg"
import arrow from "../../assets/arrow.svg"



const worldwideImgAndText = [
  { src: worldwide1, text: "Italy" },
  { src: worldwide2, text: "Mallorca" },
  { src: worldwide3, text: "Greece" },
  { src: worldwide4, text: "Croatia" }
];





function ExploreWorldwide() {
  return (
    <section className=" mt-16 flex flex-col items-center justify-center relative " >


      <div>
        <h2 className=" text-[30px] font-semibold " >
          More than 50,000 boats to rent Worldwide
        </h2>
      </div>


      {/* star design png */}

      <img src={starpng} alt="starIcons" className=" absolute top-0 right-0 " />


      {/* img cart section */}

      <div className="ImgBox flex items-center justify-center  w-screen h-[50vh] mt-28  relative gap-10" >



        {

          worldwideImgAndText.map((item, index) => (

            <div className=" w-[191px] z-[900] h-[227px] relative hover:top-[-10px] hover:w-[195px] transition-all duration-75 hover:shadow-2xl rounded-xl flex flex-col items-center justify-center   " key={index} >

              <img src={item.src} alt="exlpore Worlwide" className=' rounded-xl w-[90%] h-[70%] ' />

              <p className="text-xl font-semibold">{item.text}</p>
            </div>

          ))

        }



        <img src={worldwidebg} alt="icon" className="absolute bottom-12 left-[33%] z-0 w-20 " />


      </div>


      {/* Explore More Btn  */}

      <button className="flex bg-[rgba(7,71,79,1)] text-white p-3
relative rounded-md cursor-pointer gap-2 " >
        Explore More <img src={arrow} alt="arrow" className="cursor-pointer" />
      </button>

    </section>
  )
}

export default ExploreWorldwide
