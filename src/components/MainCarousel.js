"use client"

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { format, parseISO } from "date-fns";
import { useState } from "react";
import { Carousel1 } from "./Carousel1";
import { Carousel2 } from "./Carousel2";
import { Carousel3 } from "./Carousel3";
import { Carousel4 } from "./Carousel4";
import { BigCarousel } from "./BigCarousel";


export const MainCarousel = ({ articles }) => {


    if (articles.length === 0) {
        return (
            <div>Loading...</div>
        )
    }





    return (
        <div className="w-full h-37.5 relative rounded-lg overflow-hidden ">

          
                <BigCarousel  articles={articles} />
             
           




           
        </div>


    )
}



// <div className='visible cursor-pointer xl:invisible'><button onClick={handleSidebar}><IoMenu size={32} /></button></div>
//       <div className={checked ? 'duration-500 dark:duration-0 translate-x-0 right-0 fixed top-0 w-9/12 h-max bg-white flex flex-col'
//       : "translate-x-[100%] duration-500 right-0 fixed top-0 w-9/12 h-max dark:duration-0 bg-white flex flex-col"}><Sidebar x={x} check={checked} setChecked={handleSidebar} /></div>

   {/* <Carousel1 index={index} articles={articles} />
                <Carousel2  articles={articles} />
                <Carousel3  articles={articles} />
                <Carousel4  articles={articles} />
                <Carousel1 articles={articles} /> */}
