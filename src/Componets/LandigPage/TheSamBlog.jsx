import React from 'react'
import calender from "../../assets/calender.svg"
import arrow from "../../assets/arrow.svg"
import blogImg from "../../assets/blogImg.jpg"
import blogBottomImg1 from "../../assets/blogBottomImg1.jpg"
import blogBottomImg2 from "../../assets/blogBottomImg2.jpg"
import blogBottomImg3 from "../../assets/blogBottomImg3.jpg"



const blogImgSrc = [blogBottomImg1, blogBottomImg2, blogBottomImg3]



function TheSamBlog() {
  return (
    <section className="mt-20  relative flex flex-col items-center justify-center h-auto " >

      <h5 className=" text-3xl font-bold mb-10  " >
        The SamBoat Blog
      </h5>

      <div className="  w-[80%] h-[70vh] flex  items-center justify-between bg-[rgba(255,239,239,0.53)] p-5 " >



        {/* Boat Rental Palermo box  */}
        <div>
          <div className=" flex flex-col gap-4 items-start " >
            <p className="text-3xl font-semibold " >Boat Rental Palermo:</p>
            <p className="text-3xl font-semibold " > Dayboat Route</p>
            <p className="text-sm" > By Priyanshi from SamBoat</p>

            <div className=" flex items-center text-sm " >
              <img src={calender} alt="calender" />
              <p>01/01/2008</p>
            </div>

            <button className="flex  bg-[rgba(7,71,79,1)] text-white p-3
     relative rounded-md cursor-pointer gap-2 " >
              Explore <img src={arrow} alt="arrow" className="cursor-pointer" />
            </button>
          </div>




        </div>


        {/* img box  */}

        <div className=" w-[50%] h-[300px] rounded-xl ">

          <img src={blogImg} alt="blogImg" className=" rounded-xl object-fill w-full h-full " />

        </div>



      </div>


      {/* bottom img  */}
      <div className="  flex items-center justify-center gap-3 absolute top-[460px] w-[60%] " >




        {


          blogImgSrc.map((item, index) => (

            <div className="  flex gap-3 items-center justify-center " key={index} >
              <div className=" w-[200px] h-[150px]  bg-white rounded-xl " >
                <img src={item} alt="blogimages" className=" object-fill block w-full h-full rounded-xl " />
              </div>

            </div>


          ))

        }






      </div>



    </section>
  )
}

export default TheSamBlog
