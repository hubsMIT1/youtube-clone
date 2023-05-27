import React from "react";
import { Link } from "react-router-dom";

import ytLogo from "../images/yt-logo.png";


import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";


const Header = () => {


    return (
        <div className="sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5 header">



            <div className="group flex items-center">
                <Link to="/" className="flex h-5 items-center">
                    <img
                        className="h-full  dark:md:block"
                        src={ytLogo}
                        alt="Youtube"
                    />

                </Link>


            </div>
            <div className="flex items-center">
                <div className="hidden md:flex">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
                        <RiVideoAddLine className="text-white text-xl cursor-pointer" />
                    </div>
                    <div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
                        <FiBell className="text-white text-xl cursor-pointer" />
                    </div>
                </div>
                <div className="border flex h-8 w-8 overflow-hidden rounded-full md:ml-4">
                    <img src="" alt="" />


                </div>
            </div>
        </div>
    );
};
export default Header;
