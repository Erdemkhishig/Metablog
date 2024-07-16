import { Navbar } from "@/components/Navbar";
import { FooterUp } from "@/components/Footer-Up";
import { FooterDown } from "@/components/Footer-Down";


export default function Contact() {
    return (
        <main className="bg-white">
            <div className="px-4 max-w-screen-xl m-auto ">
                <div><Navbar /></div>
                <div>
                    <p className="text-3xl font-bold">Contact us</p>
                    <p className="py-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
                <div className="border-2 rounded-lg">
                    <div className="py-4 px-4">
                        <p className="pb-4 font-bold">Address</p>
                        <p>1328 Oak Ridge Drive, Saint Louis, Missouri</p>
                    </div>
                </div>
                <div className="border-2 rounded-lg my-8">
                    <div className="py-4 px-4">
                        <p className="pb-4 font-bold">Contact</p>
                        <p>313-332-8662</p>
                        <p>info@email.com</p>
                    </div>
                </div>
                <div className="bg-gray-50 border-2 rounded-lg mb-16 px-2 py-4">
                    <p className="text-lg font-bold">Leave a Message</p>
                    <div className="border-2 rounded-lg">Subject</div>
                    <div className="border-2 rounded-lg">Your Name</div>
                    <div className="border-2 rounded-lg">Your Name</div>
                    <div className="border-2 rounded-lg">Write a message</div>
                    <div>Send Message</div>
                </div>

            </div>
            <FooterUp />
            <FooterDown />
        </main>
    )
}