"use client"

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { format, parseISO } from "date-fns";
import { useState } from "react";
import { Carousel1 } from "./Carousel1";
import { Carousel2 } from "./Carousel2";
import { Carousel3 } from "./Carousel3";
import { Carousel4 } from "./Carousel4";


export const MainCarousel = ({ articles }) => {

    const [prev, next] = useState(true)
    const click = () => {
        next(!prev)
    };

    const add = (next) => {
        index++
    };

    const minus = (prev) => {
        index--
    };


    console.log(prev)
    let index = 1;

    if (articles.length === 0) {
        return (
            <div>Loading...</div>
        )
    }

    // const images = [
    //     <img class="w-full h-full rounded-lg  duration-600" src={caroForth.social_image} alt="" />,
    //     <img class="w-full h-full rounded-lg  duration-600" src={caroFirst.social_image} alt="" />,
    //     <img class="w-full h-full rounded-lg  duration-600" src={caroSecond.social_image} alt="" />,
    //     <img class="w-full h-full rounded-lg  duration-600" src={caroThird.social_image} alt="" />,
    //     <img class="w-full h-full rounded-lg  duration-600" src={caroForth.social_image} alt="" />,
    //     <img class="w-full h-full rounded-lg  duration-600" src={caroFirst.social_image} alt="" />
    // ];




    return (
        <div >

            <div className="flex flex-row relative  w-full h-[12rem] lg:h-[38.5rem]">
                <Carousel4 index={index} articles={articles} />
                <Carousel1 index={index} articles={articles} />
                <Carousel2 index={index} articles={articles} />
                <Carousel3 index={index} articles={articles} />
                <Carousel4 index={index} articles={articles} />
                <Carousel1 index={index} articles={articles} />

            </div>




            <div>
                <div className="flex py-2 justify-center gap-4 font-thin lg:flex lg:justify-end">
                    <button onClick={click} className="flex items-center justify-center w-[44px] h-[44px] border-2 rounded-lg  border-black"> <IoIosArrowBack size={28} /></button>
                    <button onClick={click} className="flex items-center justify-center w-[44px] h-[44px] border-2 rounded-lg border-black"> <IoIosArrowForward size={28} /> </button>
                </div>

            </div >
        </div>


    )
}



// <div className='visible cursor-pointer xl:invisible'><button onClick={handleSidebar}><IoMenu size={32} /></button></div>
//       <div className={checked ? 'duration-500 dark:duration-0 translate-x-0 right-0 fixed top-0 w-9/12 h-max bg-white flex flex-col' 
//       : "translate-x-[100%] duration-500 right-0 fixed top-0 w-9/12 h-max dark:duration-0 bg-white flex flex-col"}><Sidebar x={x} check={checked} setChecked={handleSidebar} /></div>