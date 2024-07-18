import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";





export const FooterUp = () => {


    return (
        <div className=" bg-gray-100 ">
            <div className="max-w-screen-xl m-auto  pt-12 bg-gray-100 px-8 py-16 border-b-2 lg:flex lg:gap-40 lg:justify-between lg:items-start ">
                <div><p className="text-lg font-bold py-4">About</p>
                    <p className="w-56 text-[#696A75] ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>

                    <p className="mt-8 text-[#3B3C4A]">Email : info@jstemplate.net</p>
                    <p className="mt-8 text-[#3B3C4A]">Phone : 880 123 456 789</p>

                </div>
                <div className="flex gap-12 py-8 text-[#696A75] lg:pt-4 lg:flex-col lg:gap-2">
                    <Link href="http://localhost:3000/"><span>Home</span></Link>
                    <Link href="/blog"><span>Blog</span></Link>
                    <Link href="/contact"><span>Contact</span></Link>
                </div>
                <div className="flex gap-8 lg:pt-4">
                    <FaFacebook color="#6D6E76" />
                    <FaTwitter color="#6D6E76" />
                    <FaInstagram color="#6D6E76" />
                    <FaLinkedin color="#6D6E76" />
                </div>



            </div>
        </div>


    )
}