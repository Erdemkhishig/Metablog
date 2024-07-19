"use client"

import { MetablogIcon } from "../assets/Metablog";
import { DrawerIcon } from "../assets/DrawerIcon";
import { IoSearchOutline } from "react-icons/io5";
import Link from "next/link"
import { Search } from "./Search";
import { SlArrowDownCircle } from "react-icons/sl";
import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { usePathname } from "next/navigation";
import Home from "@/app/page";



export const Navbar = () => {

    const [checked, unchecked] = useState(false)
    const handleSidebar = () => {
        unchecked(!checked)
    };

    // const pathname = usePathname();
    // const path = [
    //     {
    //         name: "Home",
    //         path: "/",

    //     },
    //     {
    //         name: "Blog",
    //         path: "/blog",

    //     }, {
    //         name: "Contact",
    //         path: "/contact",

    //     }
    // ]

    return (

        <div id="up" className="px-4">
            <div className=" flex justify-between py-8">
                <Link href="/"><span className="pr-8"> <MetablogIcon /></span></Link>
                <div className="hidden lg:flex text-[#696A75] items-center">
                    <div className="flex items-center gap-16 pl-8 pr-16">
                        {/* {path.map((path, index) => {
                            <Link key={index} href={path.path}>
                                <div className="text-black "></div>
                            </Link>
                        })} */}
                        <Link href="/"><span>Home</span></Link>
                        <Link href="/blog"><span>Blog</span></Link>
                        <Link href="/contact"><span>Contact</span></Link>
                    </div>

                    <div className="flex items-center px-16">
                        <Search />


                    </div>
                    <Link href="#down"><button> <SlArrowDownCircle /></button></Link>

                </div>
                <button className="lg:hidden -mt-8" onClick={handleSidebar} ><DrawerIcon size={32} /></button>

            </div>
            <div className={checked ? 'duration-500  translate-x-0 right-0 fixed top-0 w-full h-max bg-white flex flex-col' : "translate-x-[100%] duration-500 right-0 fixed top-0 w-9/12 h-max  bg-white flex flex-col"}><Sidebar check={checked} setChecked={handleSidebar} /></div>









        </div>


    );
};