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
                    <p className="py-8 px-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
                <div className="border-2 rounded-lg">
                    <div className="py-4 px-4">
                        <p className="pb-4 font-bold">Address</p>
                        <p className="text-[#696A75]">1328 Oak Ridge Drive, Saint Louis, Missouri</p>
                    </div>
                </div>
                <div className="border-2 rounded-lg my-8">
                    <div className="py-4 px-4">
                        <p className="pb-4 font-bold">Contact</p>
                        <p className="text-[#696A75]">313-332-8662</p>
                        <p className="text-[#696A75]">info@email.com</p>
                    </div>
                </div>
                <div className="bg-gray-50 border-2 rounded-lg mb-32 px-4 py-4">
                    <p className="text-lg font-bold">Leave a Message</p>
                    <div className="border-2 rounded-md px-4 my-4 py-[3px] text-gray-400 bg-white">Subject</div>
                    <div className="border-2 rounded-md px-4 my-4 py-[3px] text-gray-400 bg-white">Your Name</div>
                    <div className="border-2 rounded-md px-4 my-4 py-[3px] text-gray-400 bg-white">Your Name</div>
                    <div className="border-2 rounded-md px-4 my-4 pt-4 pb-40 text-gray-400 bg-white">Write a message</div>
                    <button className="w-full border-2 rounded-md px-4 py-2 text-center border-blue-600 bg-blue-600 text-white lg:w-fit">Send Message</button>
                </div>

            </div>
            <FooterUp />
            <FooterDown />
        </main>
    )
}