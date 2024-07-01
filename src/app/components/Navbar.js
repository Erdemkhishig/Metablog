import { MetablogIcon } from "../assets/Metablog";
import { DrawerIcon } from "../assets/DrawerIcon";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Card } from "./card";
export const Navbar = () => {


    return (
        <div className="max-w-screen-xl m-auto px-4">
            <div className=" flex justify-between py-8">
                <MetablogIcon />
                <DrawerIcon size={32} /> </div>
            <div className="flex mt-12 h-[600px] border-2 border-red-300 relative rounded-xl">
                <div className="w-[326px] h-[341px] absolute top-[251px] left-[7px] border-2 border-blue-400 rounded-lg"></div>
            </div>
            <div className="flex py-2 justify-center gap-4 font-thin ">
                <div className="flex items-center justify-center w-[44px] h-[44px] border-2 rounded-lg  border-black"> <IoIosArrowBack size={28} /></div>
                <div className="flex items-center justify-center w-[44px] h-[44px] border-2 rounded-lg border-black"> <IoIosArrowForward size={28} /> </div>
            </div>
            <div className="mt-16 font-bold text-2xl">Trending</div>
            <div className="mt-16 rounded-xl border-4 relative"><img src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <p className="text-white px-2 w-24 h-8 border-2 border-blue-500 rounded-lg bg-blue-500 absolute top-24 left-12">Technoloy</p>
                <p className="text-white absolute top-32 left-12 w-[200px]">The Impact of Technology on the Workplace: How Technology is Changing</p>
            </div>
            <div className="mt-20 font-bold text-2xl">All Blog Post</div>
            <div className="flex gap-4 py-12">
                <span className="text-xs text-yellow-600">All</span>
                <span className="text-xs">Design</span>
                <span className="text-xs">Travel</span>
                <span className="text-xs">Fashion</span>
                <span className="text-xs">Technology</span>
                <span className="text-xs">Branding</span>

            </div>
            <div className="flex flex-col gap-2">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          </div>
          <div className="ml-28 my-16 w-24 h-12 border-2 border-gray-400 rounded-lg flex justify-center items-center">
            Load More
          </div>



        </div>
    );
};