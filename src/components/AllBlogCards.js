"use client";

import { BlogCard } from "./BlogCard";
import { useEffect, useState } from "react";
import { BlogTag } from "./BlogTag";

const categories = [
    "All",
    "Design",
    "Travel",
    "Fashion",
    "Technology",
    "Branding",
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
            <div className="flex gap-4 py-12 flex-wrap">
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
                <div className="flex justify-end invisible w-[70%] lg:visible">   <span className="text-xs" >View All</span></div>


            </div>
            <div className="grid grid-rows-1 grid-cols-1 gap-2 lg:gap lg:grid-cols-3 lg:grid-rows-3">

                {blogs.map((blog, index) => (
                    <BlogCard
                        key={blog.title}
                        img={blog.social_image}
                        title={blog.title}
                        date={blog.published_at}
                        tags={blog.tag_list} />
                ))}
            </div>
            <div className="m-auto flex justify-center">
                <button className="my-16 w-24 h-12 border-2 border-gray-400 rounded-lg flex justify-center items-center cursor-pointer "
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