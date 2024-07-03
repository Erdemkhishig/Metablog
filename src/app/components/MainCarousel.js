import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { BigCarousel } from "./BigCarousel";

export const MainCarousel = ({ articles }) => {
    if (articles.length === 0) {
        return (
            <div>Loading...</div>
        )
    }

    const caroFirst = articles[3]


    return (
        <div >
            <div className="flex flex-row relative border-2 border-red-400 w-full h-[12rem] lg:h-[38.5rem]">
                <div className="flex justify-center absolute rounded-xl w-full h-[11.8rem] lg:h-[38rem]">
                    <img class="w-full h-full rounded-lg  duration-600" src={caroFirst.social_image} alt="" />
                    <div className=" sm:hidden border-2 border-red-300 flex flex-col gap-4 absolute rounded-lg px-4 py-8 mt-54 mr-48 lg:-ml-80 lg:mt-80 w-[50%] h-[40%] bg-white">
                        <p className=" text-blue-500 flex justify-center px-2 w-fit h-fit border-2 border-gray-200 rounded-lg bg-gray-200">{caroFirst.title}</p>
                        <p className="font-bold">{caroFirst.description}</p>
                        <p>{caroFirst.created_at}</p>

                    </div>

                </div>

            </div>





            <div>
                <div className="flex py-2 justify-center gap-4 font-thin lg:flex lg:justify-end">
                    <div className="flex items-center justify-center w-[44px] h-[44px] border-2 rounded-lg  border-black"> <IoIosArrowBack size={28} /></div>
                    <div className="flex items-center justify-center w-[44px] h-[44px] border-2 rounded-lg border-black"> <IoIosArrowForward size={28} /> </div>
                </div>

            </div >
        </div>


    )
}