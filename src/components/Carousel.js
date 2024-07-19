

import { format, parseISO } from "date-fns";
import Link from "next/link";
import Image from 'next/image';

export const CarouselCard = ({ image, id, title, description, date, tags }) => {
    return (

        <Link href={`/blog/${id}`}>
            <div>    <Image
                src={image}
                width={1250}
                height={600}
                alt="Picture"
                className="w-[1250px] h-[37.5rem] lg:h-full relative" />
                <div className="absolute bg-white lg:w-[36rem] w-80 lg:h-1/3 h-fit p-10 lg:py-4 bottom-3 pl-8 pr-4 mx-3 rounded-xl flex flex-col justify-around gap-2">
                    <div className="flex gap-2 flex-wrap">
                        {
                            tags.map((element, index) => (
                                <p key={index} className="w-fit bg-blue-600 rounded-md p-1 text-white">{element}</p>
                            ))
                        }
                    </div>
                    <p className=" font-bold text-2xl">{title}</p>
                    <p className=" text-gray-400">{format(date, 'LLLL d, yyyy')}</p>

                </div>

            </div>
        </Link>



    );
};

// import React from 'react';
// import { format, parseISO } from 'date-fns';

// const Carousel1 = ({ articles, index }) => {
//     const images = articles.map(article => article.social_image);
//     return (
//         <div>
//             {images.map((image, idx) =>( 
//                 <img key={idx} className="w-full h-full object-cover" src={image} alt="" />
//             )
//         </div>
//     );
// };
