

import { format, parseISO } from "date-fns";
export const Carousel2 = ({ articles, index }) => {

    const caroSecond = articles[articles.length - 3]

    return (


        // <div className={prev ? `duration-600 translateX(-${(index * 100) / 6}%)` : `translateX(-${(index * 100) / 6}%)`} >
        <div className="flex justify-center absolute rounded-xl w-full h-[11.8rem] lg:h-[38rem]">
            <img class="w-full h-full rounded-lg  duration-600" src={caroSecond.social_image} alt="" />
            <div className="w-44 h-24 top-[5.5rem] flex flex-col gap-2 absolute lg:top-[26rem] left-2 rounded-lg px-4 py-8 lg:w-[50%] lg:h-[30%] bg-white overflow-hidden">
                <p className="hidden text-blue-500 lg:flex justify-center px-2 w-fit h-fit border-2 border-gray-200 rounded-lg bg-gray-200">{caroSecond.title}</p>
                <p className="py-3 -mt-8 lg:mt-0 text-sm lg:font-bold">{caroSecond.description}</p>
                <p>{format(caroSecond.published_at, 'LLLL d, yyyy')}</p>

            </div>

        </div>
        // </div>


    );
};