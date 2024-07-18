import { MetablogIcon } from "../assets/Metablog";
import { DrawerIcon } from "../assets/DrawerIcon";
import { IoSearchOutline } from "react-icons/io5";
import Link from "next/link"
import { Search } from "./Search";
import { SlArrowDownCircle } from "react-icons/sl";





export const Navbar = () => {


    return (

        <div id="up" className="px-4">
            <div className=" flex justify-between py-8">
                <Link href="http://localhost:3000/"><span className="pr-8"> <MetablogIcon /></span></Link>
                <div className="hidden lg:flex text-[#696A75] items-center">
                    <div className="flex items-center gap-16 pl-8 pr-16">
                        <Link href="http://localhost:3000/"><span>Home</span></Link>
                        <Link href="/blog"><span>Blog</span></Link>
                        <Link href="/contact"><span>Contact</span></Link>
                    </div>

                    <div className="flex items-center px-16">
                        <Search />


                    </div>
                    <Link href="#down"><button> <SlArrowDownCircle /></button></Link>

                </div>
                <div className="lg:hidden"><DrawerIcon size={32} /></div>
            </div>










        </div>


    );
};