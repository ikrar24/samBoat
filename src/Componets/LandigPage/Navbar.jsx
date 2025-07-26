import React from 'react'
import logo from "../../assets/logo.png"
import flag from "../../assets/Flag.png"
import { Link } from "react-router-dom"
import userIcon from "../../assets/userIcon_Vector.svg"
function Navbar() {
    return (
        <nav className=" w-screen flex items-center justify-center  " >

            <div className=" w-[80%] flex justify-between items-center ">

                {/* logo img ul  */}
                <ul className=" cursor-pointer ">
                    <Link to="/">
                        <img src={logo} alt="image" loading='lazy' className=' w-[200px] ' />
                    </Link>
                </ul>


                <ul className=" flex gap-3 items-center justify-center " >

                    {/* Select Options  */}
                    <li>
                        <select name="discover" id="discover" className=' bg-transparent ' >
                            <option value="discover">Discover</option>
                            <option value="discover">Options</option>
                        </select>
                    </li>

                    {/* flag img  */}
                    <li className=" w-[30px] h-[30px] rounded-full ">
                        <img src={flag} alt="flag" className=" object-fill w-full h-full rounded-full " />
                    </li>


                    {/* Sing In Btn  */}
                    <li>
                        <button className="flex justify-center items-center gap-3 bg-[rgba(7,71,79,1)] p-3 rounded-xl text-white font-semibold " >
                            <span><img src={userIcon} alt="userIcon" />
                            </span> Sign in  </button>
                    </li>

                </ul>







            </div>
        </nav>
    )
}

export default Navbar
