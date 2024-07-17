"use client";

import { Navbar } from "@/components/Navbar";
import { FooterUp } from "@/components/Footer-Up";
import { FooterDown } from "@/components/Footer-Down";
import Link from "next/link"
import { format, parseISO } from "date-fns";
import { useEffect, useState } from "react";

import { BlogCard } from "@/components/BlogCard";
import { useParams } from "next/navigation";
import { BLOCKED_PAGES } from "next/dist/shared/lib/constants";
import { FaUserCircle } from "react-icons/fa";


export default function oneBlog() {


    const [blogs, setBlogs] = useState("");
    const { id } = useParams()
    useEffect(() => {
        const getData = async () => {
            try {


                const res = await fetch(`https://dev.to/api/articles/${id}
                    }`
                );

                const data = await res.json();

                setBlogs(data);


            } catch (error) {
                console.log(error);
            }
        };

        getData();

    }, [id]);
    if (!blogs) {
        return <div className="bg-white h-screen">Loading...</div>;
    }
    const date = parseISO(blogs.published_at)

    return (
        <main className="bg-white">
            <div className="px-4 max-w-screen-xl m-auto lg:px-72">
                <div><Navbar /></div>
                <div className="text-4xl font-bold">

                    {blogs.title}

                </div>
                <div className="flex gap-2 items-center py-10">
                    <div><FaUserCircle color="gray" /></div>
                    <div> {blogs.user.name}</div>
                    <div className="px-4">{format(date, 'LLLL d, yyyy')}</div>
                </div>
                <div><img src={blogs.cover_image} alt="" /></div>
                <div className="pt-8">{blogs.description}</div>
                <div className="flex flex-col justify-center items-center pb-32 gap-6" dangerouslySetInnerHTML={{ __html: blogs.body_html }} />



            </div>
            <FooterUp />
            <FooterDown />
        </main>
    )
}

