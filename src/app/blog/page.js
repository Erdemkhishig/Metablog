"use client";
import { Navbar } from "@/components/Navbar";
import { FooterUp } from "@/components/Footer-Up";
import { FooterDown } from "@/components/Footer-Down";

import { BlogCard } from "@/components/BlogCard";
import { useEffect, useState } from "react";
import { BlogTag } from "@/components/BlogTag";
import Link from "next/link";


export default function Blog() {


    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState([]);

    const [category, setCategory] = useState("All");
    const [perPage, setPerPage] = useState(12);



    const handleLoadMore = () => {
        setPerPage(perPage + 3);
    };

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);

                const res = await fetch(`https://dev.to/api/articles?page=1&per_page=${perPage}${category !== "All" ? `&tag=${category}` : ""
                    }`
                );

                const data = await res.json();

                setBlogs(data);

                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        };

        getData();

    }, [category, perPage]);


    return (
        <main className="bg-white">
            <div className="px-4 max-w-screen-xl m-auto ">

                <div>  <Navbar /> </div>
                <div >
                    <div className="mt-20 font-bold text-2xl pb-8">All Blog Post</div>
                    <div className="flex items-center">





                    </div>
                    <div className="grid grid-rows-1 grid-cols-1 gap-2 lg:gap lg:grid-cols-3 lg:grid-rows-3">

                        {blogs.map((blog, index) => (
                            <Link href={`/blog/${blog.id}`}>
                                <BlogCard
                                    key={blog.title}
                                    img={blog.social_image}
                                    title={blog.title}
                                    date={blog.published_at}
                                    tags={blog.tag_list} />
                            </Link>

                        ))}
                    </div>
                    <div className="m-auto flex justify-center">
                        <button className="my-16 w-24 h-12 border-2 border-gray-400 rounded-lg flex justify-center items-center cursor-pointer "
                            onClick={handleLoadMore}>
                            {loading ? <p>Loading...</p> : <p>Load More</p>}
                        </button>
                    </div>
                </div>
            </div>





            <FooterUp />
            <FooterDown />


        </main>
    )
}



