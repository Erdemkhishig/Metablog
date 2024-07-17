"use client"

import { useEffect, useState } from "react";
import {  CarouselCard } from "./Carousel1";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import React from "react";
import Link from "next/link";

export const BigCarousel = ({ articles }) => {
    const [percent, setPercent] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [blogs, setBlogs] = useState([])

    useEffect(() => {

        const getData = async () => {
            try {
                const res = await fetch(`https://dev.to/api/articles?page=1&per_page=4`);
                const data = await res.json();
                setBlogs(data);
            } catch (error) {
                console.log(error);
            }

        };
        getData()

    }, []);

 if (blogs.length === 0) {
        return (
            <div>Loading...</div>
        )
    }

    const clickNext = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setPercent((prevPercent) => (prevPercent + 1) % 6);
    };

    const clickPrev = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setPercent((prevPercent) => (prevPercent - 1 + 6) % 6);
    };

    const handleTransitionEnd = () => {
        setIsTransitioning(false);
        if (percent === 0) {
            setPercent(4);
        } else if (percent === 5) {
            setPercent(1);
        }
    };

    return (
        <div>
            <div className="w-full h-[37.5rem] rounded-lg relative overflow-hidden shadow-lg">
                <div
                    className={`absolute bg-green-200 w-[600%] h-full flex ${isTransitioning ? "duration-1000" : ""
                        }`}
                    style={{ transform: `translateX(-${(percent * 100) / 6}%)` }}
                    onTransitionEnd={handleTransitionEnd}
                >
                    <CarouselCard key={blogs[3].title} image={blogs[3].social_image} id={blogs[3].id} title={blogs[3].title} description={blogs[3].description} date={blogs[3].published_at} />
                    {
                    blogs.map ((element, index) =>(
                    <CarouselCard key={index} image={element.social_image} id={element.id} title={element.title} description={element.description} date={element.published_at} />
                    ))
                }
                    <CarouselCard key={blogs[0].title} image={blogs[0].social_image} id={blogs[0].id} title={blogs[0].title} description={blogs[0].description} date={blogs[0].published_at} />
                </div>
            </div>
            <div className=" flex py-6 gap-2 font-thin justify-end">
                <button className="flex items-center justify-center w-[24px] h-[24px] lg:w-[44px] lg:h-[44px] border-2 rounded-lg  border-black">   <IoIosArrowBack onClick={clickPrev} size={28} /></button>
                <button className="flex items-center justify-center w-[24px] h-[24px] lg:w-[44px] lg:h-[44px] border-2 rounded-lg border-black"> <IoIosArrowForward onClick={clickNext} size={28} /> </button>
            </div>
        </div>
    )
}