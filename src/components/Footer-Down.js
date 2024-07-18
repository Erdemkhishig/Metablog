import Link from "next/link";
import { MetablogfooterIcon } from "../assets/MetaBlogFooterIcon"
import { SlArrowUpCircle } from "react-icons/sl";

export const FooterDown = () => {

    return (
        <div id="down" className="bg-gray-100">
            <div className="px-8 lg:flex lg:justify-between lg:gap-80 max-w-screen-xl m-auto  bg-gray-100">
                <div className="py-8"><MetablogfooterIcon /></div>
                <div className="py-8 flex flex-col gap-8 lg:flex lg:flex-row text-[#696A75]">
                    <p>Terms of Use</p>
                    <p>Privacy of Policy</p>
                    <p>Cookie Policy</p>
                    <Link href="#up"><button><SlArrowUpCircle /></button></Link>
                </div>
            </div>
        </div>


    )
}