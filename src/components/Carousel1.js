

import { format, parseISO } from "date-fns";
import Link from "next/link";

export const Carousel1 = ({ articles, index }) => {


    const caroFirst = articles[articles.length - 4]

    return (

        <Link href={`/blog/${caroFirst.id}`}>
            <div><img className="w-[1250px] h-full relative" src={caroFirst.social_image} alt="" />
                <div className="z-20">
                    <p>{caroFirst.title}</p>
                    <p >{caroFirst.description}</p>
                    <p>{format(caroFirst.published_at, 'LLLL d, yyyy')}</p>

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
