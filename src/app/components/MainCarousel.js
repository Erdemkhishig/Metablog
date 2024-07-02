import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { BigCarousel } from "./BigCarousel";

export const MainCarousel = ({ articles }) => {



    return (
        <div >
            <BigCarousel articles={articles} />

            <div className="flex py-2 justify-center gap-4 font-thin lg:flex lg:justify-end">


                <div className="flex items-center justify-center w-[44px] h-[44px] border-2 rounded-lg  border-black"> <IoIosArrowBack size={28} /></div>
                <div className="flex items-center justify-center w-[44px] h-[44px] border-2 rounded-lg border-black"> <IoIosArrowForward size={28} /> </div>
            </div>

        </div>


    )
}