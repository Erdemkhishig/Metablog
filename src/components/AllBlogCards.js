"use client";

import { BlogCard } from "./BlogCard";
import { useEffect, useState } from "react";
import { BlogTag } from "./BlogTag";
import Link from "next/link";

const categories = [
    "All",
    "Design",
    "Travel",
    "Fashion",
    "Technology",
    "Javascript",
]


export const Allblog = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState([]);

    const [category, setCategory] = useState("All");
    const [perPage, setPerPage] = useState(9);

    const handleCategory = (category) => {
        setCategory(category);
        setPerPage(9);
    };

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
        <div >
            <div className="mt-20 font-bold text-2xl">All Blog Post</div>
            <div className="flex items-center">
                <div className="flex flex-wrap gap-4 py-12 lg:w-2/3">
                    {categories.map((item) => (
                        <button
                            key={item}
                            className="px-2 py-1 bg-gray-200 rounded-md"
                            style={{
                                color: category === item ? "#4b6bfb" : "",
                            }}
                            onClick={() => handleCategory(item)}>
                            {item}

                        </button>




                    ))}

                </div>
                <Link href="/blog" className="hidden lg:flex lg:justify-end w-[70%] lg:visible">   <span className="flex justify-end text-xs cursor-pointer" >View All</span></Link>



            </div>
            <div className="grid grid-rows-1 grid-cols-1 gap-2 lg:gap lg:grid-cols-3 lg:grid-rows-3">

                {blogs.map((blog, index) => (
                    <Link href={`/blog/${blog.id}`}>
                        <BlogCard
                            key={blog.title}
                            img={blog.social_image}
                            title={blog.title}
                            date={blog.published_at}
                            name={blog.user.name}
                            tags={blog.tag_list} />
                    </Link>

                ))}
            </div>
            <div className="m-auto flex justify-center">
                <button className="my-16 w-36 h-12 border-2 border-gray-300 rounded-lg flex justify-center items-center cursor-pointer "
                    onClick={handleLoadMore}>
                    {loading ? <p>Loading...</p> : <p>Load More</p>}
                </button>
            </div>
        </div>









    )
}


{/* <div className="grid grid-rows-1 grid-cols-1 gap-2 lg:gap lg:grid-cols-3 lg:grid-rows-3">

{articles.map((item, index) => (
    <Card key={index} img={item.social_image} title={item.title} date={item.published_at} tag={item.tag_list[0]} />
))}
</div> */}