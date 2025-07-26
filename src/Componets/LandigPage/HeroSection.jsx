import React from 'react'
import border from "../../assets/border.svg"
import boatImg2 from "../../assets/boatImg2.jpg"
import Location from "../../assets/Location.svg"
import when from "../../assets/when.svg"
import motar from "../../assets/motar.svg"
import salilboat from "../../assets/salilboat.svg"
import search from "../../assets/search.svg"
import arrow from "../../assets/arrow.svg"
import barsh from "../../assets/barsh.png"

function HeroSection() {
    return (
        <section className=" relative pl-16 flex  " >

            <main className=" w-[60%]  ">

                <h1 className=" text-[70px] font-[400] text-[rgba(7,71,79,1)] ">
                    Finding the perfect boat rental is easy
                </h1>

                <p className=" font-poppins w-[500] text-[24px] text-[rgba(94,98,130,1)] " >
                    Choose from over 50,000 charted
                    yachats & boats with or without a captain
                </p>



                {/* search box  */}
                <div className=" searchbar   w-[300px] flex flex-col items-center justify-center gap-4 ">


                    <div className=" flex bg-white w-[90%] p-3 pl-3 gap-2 rounded-xl " >
                        <img src={Location} className="" />
                        <input type="text" placeholder="Whare to?" className=" w-full border-none outline-none " />
                    </div>


                    <div className=" flex bg-white w-[90%] p-3 pl-3 gap-2 rounded-xl " >
                        <img src={when} />
                        <input type="text" placeholder="Whare to?" className=" w-full border-none outline-none " />
                    </div>



                    {/* option */}
                    <div className=" flex justify-between w-[90%] ">

                        <div className=" flex gap-2 items-center justify-center bg-white p-3 rounded-md w-[120px] ">
                            <img src={motar} className=" w-10 " />
                            <p>Motor</p>
                        </div>

                        <div className=" flex items-center justify-center gap-2 bg-white p-3 rounded-md w-[120px] ">
                            <img src={salilboat} className="" />
                            <p>Sailiboat</p>
                        </div>


                    </div>


                    {/* search btn  */}
                    <div className=" flex bg-[rgba(251,194,90,1)] w-[90%] items-center justify-center p-3 rounded-md gap-2 cursor-pointer ">
                        <img src={search} alt="searchicon" />
                        <button> Search </button>
                    </div>



                </div>


                <button className="flex bg-[rgba(7,71,79,1)] text-white p-3
relative left-[90%] rounded-md cursor-pointer gap-2 " >
                    Explore Now <img src={arrow} alt="arrow" className="cursor-pointer" />
                </button>


                {/* this this barsh bg  */}

                <img src={barsh} alt="barshIcon" className="absolute top-[28%] " />


            </main>



            {/* HeroSection border images  */}
            <div className=" relative  ">
                <img src={border} className="h-[100%] w-[890px] relative right-0 " />


                {/* HeroSection imgs */}
                <img src={boatImg2} alt="image" className=" heroImages absolute top-16 w-[680px] h-[500px] right-0 rounded-bl-[300px] " />


            </div>



        </section>
    )
}

export default HeroSection
