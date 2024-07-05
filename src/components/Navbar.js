import { MetablogIcon } from "../assets/Metablog";
import { DrawerIcon } from "../assets/DrawerIcon";
import { IoSearchOutline } from "react-icons/io5";





export const Navbar = () => {


    return (

        <div className="px-4">
            <div className=" flex justify-between py-8">
                <MetablogIcon />
                <div className="hidden lg:flex">
                    <div className="flex items-center gap-16 pr-36">
                        <span>Home</span>
                        <span>Blog</span>
                        <span>Contact</span>
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