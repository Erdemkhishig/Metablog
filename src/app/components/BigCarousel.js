"use client"

import { useState } from "react";
import { Carousel1 } from "./Carousel1";
import { Carousel2 } from "./Carousel2";
import { Carousel3 } from "./Carousel3";
import { Carousel4 } from "./Carousel4";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";



const slides = [
    //    "https://lh3.googleusercontent.com/d/14hCZV1nBdU-Q-ECGnIwCV0ERzm8tUG3i",
    //    "https://lh3.googleusercontent.com/d/10u8iWzRpMyLyvDK3-DvqrO5kUXlU9QUg",
    //    "https://lh3.googleusercontent.com/d/1c2cj1Gjz1_W41zIuTGFolVuF3ofyvhfH",
    //    "https://lh3.googleusercontent.com/d/1ZxZFVLC5OIeMgNH2sJkFnwozycuOHaPu",
    <Carousel2 />,
    <Carousel3  />,
    <Carousel4  />,
    <Carousel1  />,

];




export const BigCarousel = ({ articles }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));

    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));

    };

    return (
        <div >
            <Carousel2 articles={articles} />,
            <Carousel3 articles={articles} />,
            <Carousel4 articles={articles} />,
            <Carousel1 articles={articles} />,


            <div>
                <div className="mt-[38rem] flex py-2 justify-center gap-4 font-thin lg:flex lg:justify-end">
                    <button className="flex items-center justify-center w-[44px] h-[44px] border-2 rounded-lg  border-black"> <IoIosArrowBack onClick={prevSlide} size={28} /></button>
                    <button className="flex items-center justify-center w-[44px] h-[44px] border-2 rounded-lg border-black"> <IoIosArrowForward onClick={nextSlide} size={28} /> </button>
                </div>

            </div >




        </div>


    )
}