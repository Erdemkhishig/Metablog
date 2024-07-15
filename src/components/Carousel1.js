

import { format, parseISO } from "date-fns";
export const Carousel1 = ({ articles, index }) => {


    const caroFirst = articles[articles.length - 4]

    return (


        <div><img className="w-[1248px] h-full object-cover" src={caroFirst.social_image} alt="" />
            {/* <div className="w-44 h-24 top-[5.5rem] flex flex-col gap-2 absolute lg:top-[26rem] left-2 rounded-lg px-4 py-8 lg:w-[50%] lg:h-[30%] bg-white overflow-hidden">
                <p className="hidden text-blue-500 lg:flex justify-center px-2 w-fit h-fit border-2 border-gray-200 rounded-lg bg-gray-200">{caroFirst.title}</p>
                <p className="py-3 -mt-8 lg:mt-0 text-sm lg:font-bold">{caroFirst.description}</p>
                <p>{format(caroFirst.published_at, 'LLLL d, yyyy')}</p>

            </div> */}

        </div>



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
