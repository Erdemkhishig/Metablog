import { Navbar } from "@/components/Navbar";
import { FooterUp } from "@/components/Footer-Up";
import { FooterDown } from "@/components/Footer-Down";


export default function Contact() {
    return (
        <main className="bg-white">
            <div className="px-4 max-w-screen-xl m-auto lg:px-72">
                <div><Navbar /></div>
                <div className="pt-24">
                    <p className="text-3xl font-bold px-4">Contact us</p>
                    <p className="pt-8 px-4 text-[#696A75]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
                <div className="flex gap-12 py-8">
                    <div className="border-2 rounded-lg w-1/2">
                        <div className="py-4 px-4">
                            <p className="pb-4 font-bold text-xl ">Address</p>
                            <p className="text-[#696A75] flex flex-wrap pb-4">1328 Oak Ridge Drive, Saint Louis, Missouri</p>
                        </div>
                    </div>
                    <div className="border-2 rounded-lg  w-1/2">
                        <div className="py-4 px-4">
                            <p className="pb-4 font-bold text-xl">Contact</p>
                            <p className="text-[#696A75]">313-332-8662</p>
                            <p className="text-[#696A75]">info@email.com</p>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100 border-2 rounded-lg mb-32 px-4 py-4 flex flex-col">
                    <p className="text-lg font-bold py-2">Leave a Message</p>
                    <div className="flex  gap-2 lg:gap-8">
                        <input className="border-2 rounded-md px-4 my-4 py-[3px]  bg-white w-1/2" type="Subject" placeholder="Your Name"></input>
                        <input className="border-2 rounded-md px-4 my-4 py-[3px]  bg-white w-1/2" type="Subject" placeholder="Your Email"></input>
                    </div>
                    <input className="border-2 rounded-md px-4 my-4 py-[3px]  bg-white" type="Subject" placeholder="Subject"></input>
                    <input className="border-2 rounded-md px-4 my-4 pt-4 pb-40  bg-white" type="Subject" placeholder="Write a message"></input>
                    <button className="w-full border-2 rounded-md px-4 py-2 text-center border-blue-600 bg-blue-600 text-white lg:w-fit">Send Message</button>
                </div>

            </div>
            <FooterUp />
            <FooterDown />
        </main>
    )
}