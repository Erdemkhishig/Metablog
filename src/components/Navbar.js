import { MetablogIcon } from "../assets/Metablog";
import { DrawerIcon } from "../assets/DrawerIcon";
import { IoSearchOutline } from "react-icons/io5";
import Link from "next/link"




export const Navbar = () => {


    return (

        <div className="px-4">
            <div className=" flex justify-between py-8">
                <MetablogIcon />
                <div className="hidden lg:flex">
                    <div className="flex items-center gap-16 pr-36">
                        <Link href="http://localhost:3000/"><span>Home</span></Link>
                        <Link href="/blog"><span>Blog</span></Link>
                        <Link href="/contact"><span>Contact</span></Link>
                    </div>

                    <div className="flex items-center px-16">
                        <input type="search" placeholder="Search.. "></input>
                        <button><IoSearchOutline /></button>


                    </div>
                </div>
                <div className="lg:hidden"><DrawerIcon size={32} /></div>
            </div>










        </div>


    );
};