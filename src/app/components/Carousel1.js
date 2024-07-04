

import { format, parseISO } from "date-fns";
export const Carousel1 = ({ articles, index }) => {


    const caroFirst = articles[articles.length - 4]
    console.log(caroFirst)
    return (


        <div className="flex justify-center absolute rounded-xl w-full h-[11.8rem] lg:h-[38rem]">
            <img class="w-full h-full rounded-lg  duration-600" src={caroFirst.social_image} alt="" />
            <div className="w-44 h-24 top-[5.5rem] flex flex-col gap-2 absolute lg:top-[26rem] left-2 rounded-lg px-4 py-8 lg:w-[50%] lg:h-[30%] bg-white overflow-hidden">
                <p className="hidden text-blue-500 lg:flex justify-center px-2 w-fit h-fit border-2 border-gray-200 rounded-lg bg-gray-200">{caroFirst.title}</p>
                <p className="py-3 -mt-8 lg:mt-0 text-sm lg:font-bold">{caroFirst.description}</p>
                <p>{format(caroFirst.published_at, 'LLLL d, yyyy')}</p>

            </div>

        </div>



    );
};