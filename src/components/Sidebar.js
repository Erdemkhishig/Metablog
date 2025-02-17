
import { DrawerIcon } from "../assets/DrawerIcon";
import Link from "next/link"

// import { useState } from "react";



export const Sidebar = ({ checked, setChecked }) => {

    return (


        <div className=" top-0 right-0 w-full h-max bg-white flex flex-col z-50">
            <div className="text-2xl px-4 flex flex-row items-start justify-between border-b-2 border-gray-200 py-1 font-black">
                <span><DrawerIcon size={32} /> </span>
                <button className="text-sm border-2 rounded-full border-black p-1 px-2" onClick={setChecked}>X</button>
            </div>
            <div className="px-4 my-4 dark:text-white flex flex-row items-start gap-4 justify-between">
                <Link href="/"><span>Home</span></Link>
                <Link href="/blog"><span>Blog</span></Link>
                <Link href="/contact"><span>Contact</span></Link>
            </div>

        </div>

    )
}