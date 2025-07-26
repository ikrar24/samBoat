import React from 'react'
import subsarrow from "../../assets/subsarrow.png"
import starbgpng2 from "../../assets/starbgpng2.png"
import maskbg from "../../assets/maskbg.png"
import maskbg2 from "../../assets/maskbg2.png"
import sendIcon from "../../assets/sendIcon.svg"

function Subscribe() {
    return (

        <section className=" mt-36 flex justify-center items-center relative " >

            <div className="  bg-[rgba(127,198,208,1)] flex-col gap-10 w-[80%] flex items-center justify-center p-20 rounded-xl rounded-tl-[90px] " >

                <h6 className=" text-3xl font-semibold w-[70%] text-center " >
                    Subscribe to get information, latest news and other
                    interesting offers about SamBoat
                </h6>





                {/* subs input feild  */}

                <form className=" flex gap-3  " >
                    <div className=" flex bg-white gap-2 items-center justify-center p-4 rounded-xl w-[500px] z-[1000] " >

                        <div className=" border flex items-center justify-center border-[rgba(105,105,132,1)] border-solid w-[20px] h-[20px] rounded-[5px] ">
                            <img src={subsarrow} alt="icon" />
                        </div>

                        <input type="text" placeholder=" Your email " className=" border-none outline-none w-full " />
                    </div>





                    {/* maskbg top */}

                    <img src={maskbg} alt="backgoundimage" className=" absolute top-0 right-[135px] " />

                    {/* maskbg bottom */}

                    <img src={maskbg2} alt="backgoundimage" className=" absolute bottom-0 left-[90px] z-0 " />





                    {/* subs btn  */}


                    <button className="bg-gradient-to-b from-[rgba(7,71,79,1)] to-[rgba(20,154,171,1)]  text-white  p-3 pr-5 pl-5 rounded-lg " >
                        Subscribe
                    </button>


                </form>

            </div>



            {/* starbg png */}


            <img src={starbgpng2} alt="backgroundImage" className="absolute top-[80%] right-8 w-[100px] " />


        </section>


    )
}

export default Subscribe
