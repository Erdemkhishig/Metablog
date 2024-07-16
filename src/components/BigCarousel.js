"use client"

import { useEffect, useState } from "react";
import { Carousel1 } from "./Carousel1";
import { Carousel2 } from "./Carousel2";
import { Carousel3 } from "./Carousel3";
import { Carousel4 } from "./Carousel4";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import React from "react";




const slides = [
    {
        url: 'https://media.dev.to/cdn-cgi/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F52q4hyv61kfmnps2yme4.png'
    },
    {
        url: 'https://media.dev.to/cdn-cgi/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Frw9zqnunwy90k4lkvbyu.png'
    },
    {
        url: 'https://media.dev.to/cdn-cgi/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Ffg3fij7wo1k19r3xepfw.png'
    },
    {
        url: 'https://media.dev.to/cdn-cgi/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F2lzjhhdzwzaucsexxm0o.jpg'
    },
];


export const BigCarousel = ({ articles, }) => {

    const slider = [
        <Carousel4 articles={articles} />,
        <Carousel1 articles={articles} />,
        <Carousel2 articles={articles} />,
        <Carousel3 articles={articles} />,
        <Carousel4 articles={articles} />,
        <Carousel1 articles={articles} />,

    ]









    // const [currentIndex, setCurrentIndex] = useState(0);

    // const prevSlide = () => {
    //     setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));

    // };

    // const nextSlide = () => {
    //     setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));

    // };


    if (articles.length === 0) {
        return (
            <div>Loading...</div>
        )
    }



    // const [prev, next] = useState(0)
    // const [index, setIndex] = useState(1)
    // const handleSlider = () => {
    //     next(!prev)
    //     setIndex(index + 1)
    // };

    const [currentIndex, setCurrentIndex,] = useState(1);
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? 4 : currentIndex - 1;
        setCurrentIndex(newIndex)
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === 5;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    };

    useEffect(() => {
        if (currentIndex === 4) false;
        else if (currentIndex === 0) false;
    }, []);




    //     const [currentIndex, setCurrentIndex] = useState(0);

    // const nextImage = () => {
    //     setCurrentIndex((prevIndex) => (prevIndex + 1) % slider.length);
    // };

    // const prevImage = () => {
    //     setCurrentIndex((prevIndex) => (prevIndex - 1 + slider.length) % slider.length);
    // };

    return (
        <div>
            <div className="relative w-full h-[15rem] lg:h-[38rem] overflow-hidden" >
                <div className="w-[600%] h-full rounded-2xl flex duration-1000" style={{ transform: `translateX(-${(currentIndex * 100) / 6}%)` }}>
                    {slider}

                    {/* <Carousel4 articles={articles} />
                    <Carousel1 articles={articles} />
                    <Carousel2 articles={articles} />
                    <Carousel3 articles={articles} />
                    <Carousel4 articles={articles} />
                    <Carousel1 articles={articles} /> */}
                </div>



            </div>
            <div className=" flex py-6 gap-2 font-thin justify-end">
                <button className="flex items-center justify-center w-[24px] h-[24px] lg:w-[44px] lg:h-[44px] border-2 rounded-lg  border-black">   <IoIosArrowBack onClick={prevSlide} size={28} /></button>
                <button className="flex items-center justify-center w-[24px] h-[24px] lg:w-[44px] lg:h-[44px] border-2 rounded-lg border-black"> <IoIosArrowForward onClick={nextSlide} size={28} /> </button>
            </div>
        </div>





    )
}