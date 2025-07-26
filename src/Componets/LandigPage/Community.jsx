import React from 'react'
import community from "../../assets/community.svg"
import communitiyImg1 from "../../assets/communitiyImg1.jpg"
import communitiyImg2 from "../../assets/communityImg2.jpg"
import communitiyImg3 from "../../assets/communityImg3.jpg"
import communityProfile from "../../assets/communityProfile.png"
import calender from "../../assets/calender.svg"
import star from "../../assets/star.svg"
import arrow from "../../assets/arrow.svg"




const cardData = [
    {
        image: communitiyImg1,
        profileImage: communityProfile,
        date: "01/01/2008",
        rating: star,
        caption: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
        name: "Lina",
        location: "France",
    },

    {
        image: communitiyImg2,
        profileImage: communityProfile,
        date: "01/01/2008",
        rating: star,
        caption: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
        name: "Lina",
        location: "France",
    },
    {
        image: communitiyImg3,
        profileImage: communityProfile,
        date: "01/01/2008",
        rating: star,
        caption: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
        name: "Lina",
        location: "France",
    },


]







function Community() {
    return (
        <section className="mt-20 flex flex-col items-center justify-center relative " >
            <h3 className=" text-2xl font-semibold " >Powered by community of happy sailors</h3>

            <div className="paraBox w-[80%] flex  flex-col gap-3 text-center mt-5 ">
                <p> The reviews you share after each rental play a vital role in strengthening SamBoat and building trust among our community. </p>

                <p> With more than 300,000 people sailing with SamBoat each year, we are the largest platform for sailboats, catamarans and motor boats charter worldwide.
                    189186 users had an unforgettable experience</p>
            </div>



            {/* community bg img  */}

            <img src={community} alt="icons" loading='lazy' className="absolute top-0 right-0 w-[150px] " />




            {/* card   */}



            <div className=" flex mt-5 gap-3  items-center justify-center " >

                {

                    cardData.map((item, index) => {
                        return (
                            <div className=" flex gap-5 shadow-2xl rounded-xl w-[20%] p-3 flex-col" key={index} >


                                <div className=" w-[250px] rounded-xl h-[200px] " >
                                    <img src={item.image} alt="communitiyImg" className=" object-fill w-full h-full rounded-xl " />
                                </div>

                                {/* Profile  */}

                                <div className="profile flex items-center justify-between">


                                    <div className="flex items-center justify-center gap-2">


                                        <div className="bg-slate-300 rounded-full" >
                                            <img src={item.profileImage} alt="communitiyImages" className=" w-[30px] h-[30px] " />
                                        </div>
                                        <p className=" text-black text-sm " >{item.name}</p>
                                    </div>


                                    <p className="text-[rgba(119,215,227,1)] " > {item.location} </p>

                                </div>

                                {/* caption  */}

                                <div className="">
                                    <p> {item.caption} </p>
                                </div>


                                {/* post date */}
                                <div className="flex items-center justify-between" >

                                    <div className=" flex items-center text-sm " >
                                        <img src={calender} alt="calender" />
                                        <p>{item.date}</p>
                                    </div>

                                    <div>
                                        <img src={item.rating} alt="rating" />
                                    </div>

                                </div>
                            </div>
                        )
                    })

                }








            </div>





            <button className="flex mt-10 bg-[rgba(7,71,79,1)] text-white p-3
relative rounded-md cursor-pointer gap-2 " >
                See all SamBoat Reviews <img src={arrow} alt="arrow" className="cursor-pointer" />
            </button>

        </section>

    )
}

export default Community
