import React from 'react'
import haveboat from "../../assets/haveboat.jpg"
import arrow2 from "../../assets/arrow2.svg"


function DoYouHave() {
  return (
    <section className="mt-20 w-full  flex items-center justify-center relative " >

      <div className="w-[80%]  " >

        {/* img box */}
        <div className=" w-[650px] rounded-xl " >
          <img src={haveboat} alt="haveboatImage" loading='lazy' className=" object-fill rounded-xl w-full h-full " />
        </div>

        {/* card */}

        <div className=" absolute top-[100px] right-[15%] p-4 bg-white w-[500px] h-auto rounded-xl shadow-2xl " >

          <p className=" text-2xl font-bold " >Do you have a boat?</p>
          <p className=" text-2xl font-bold mt-1 mb-5 text-[rgba(136,220,231,1)] " >Rent it out!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipising.</p>

          <button className="flex mt-5 bg-[rgba(136,220,231,1)]  p-3
relative rounded-md cursor-pointer gap-2 font-semibold " >
            Get Started <img src={arrow2} alt="arrow" className="cursor-pointer text-[rgba(7,71,79,1)] " />
          </button>



        </div>


      </div>
    </section>
  )
}

export default DoYouHave
