

import { format, parseISO } from "date-fns";
export const Carousel3 = ({ articles, index }) => {


    const caroThird = articles[articles.length - 2]


    return (



        <div><img className="w-[1248px] h-full object-cover" src={caroThird.social_image} alt="" />
            {/* <div className="w-44 h-24 top-[5.5rem] flex flex-col gap-2 absolute lg:top-[26rem] left-2 rounded-lg px-4 py-8 lg:w-[50%] lg:h-[30%] bg-white overflow-hidden">
                <p className="hidden text-blue-500 lg:flex justify-center px-2 w-fit h-fit border-2 border-gray-200 rounded-lg bg-gray-200">{caroThird.title}</p>
                <p className="py-3 -mt-8 lg:mt-0 text-sm lg:font-bold">{caroThird.description}</p>
                <p>{format(caroThird.published_at, 'LLLL d, yyyy')}</p>

            </div> */}

        </div>



    );
};