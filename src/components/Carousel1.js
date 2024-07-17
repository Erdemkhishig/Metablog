

import { format, parseISO } from "date-fns";
import Link from "next/link";

export const CarouselCard = ({ image, id, title, description, date }) => {
    return (

        <Link href={`/blog/${id}`}>
            <div><img className="w-[1250px] h-full relative" src={image} alt="" />
                <div className="absolute bg-white bottom-8 pl-8 ml-8 rounded-xl">
                    <p className="w-20 h-20">{title}</p>
                    <p >{description}</p>
                    <p>{format(date, 'LLLL d, yyyy')}</p>

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
