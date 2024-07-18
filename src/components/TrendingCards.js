import Link from "next/link";
import { useEffect, useState } from "react";
import Image from 'next/image';

export const Trending = () => {

    const [blogs, setBlogs] = useState([]);
    
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch(`https://dev.to/api/articles?page=1&per_page=4`);
                const data = await res.json();
                setBlogs(data);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    },[]);


    // const trendFirst = articles[articles.length - 5]
    // const trendSecond = articles[articles.length - 6]
    // const trendThird = articles[articles.length - 7]
    // const trendForth = articles[articles.length - 8]

    // if (articles.length === 0) {
    //     return (
    //         <div>Loading...</div>
    //     )
    // }

    return (
        <div >
            <div className="mt-16 font-bold text-2xl">Trending</div>
            <div className="flex gap-6 scroll-x overflow-auto">
                {blogs.map((element, index)=>(
                    <Link key={index} href={`/blog/${element.id}`} className="mt-16 relative ">
                    <div className=" w-[289px] h-[320px] rounded-xl"	><img class="w-full h-full" src={element.social_image} alt="" /></div>
                    <p className="text-white px-2 w-24 h-8 border-2 border-blue-500 rounded-lg bg-blue-500 absolute top-36 left-12 flex items-center ">Technoloy</p>
                    <p className="text-white absolute top-48 left-12  w-[200px]">The Impact of Technology on the Workplace: How Technology is Changing</p>
                    </Link>
                ))}

                {/* <Link>
                    <div className=" w-[289px] h-[320px] rounded-xl"	><img class="w-full h-full" src={trendFirst.social_image} alt="" /></div>
                    <p className="text-white px-2 w-24 h-8 border-2 border-blue-500 rounded-lg bg-blue-500 absolute top-36 left-12 flex items-center ">Technoloy</p>
                    <p className="text-white absolute top-48 left-12  w-[200px]">The Impact of Technology on the Workplace: How Technology is Changing</p>
                </Link>
                <Link href={`/blog/${trendSecond.id}`} className="mt-16 relative ">
                    <div className=" w-[289px] h-[320px] rounded-xl"	><img class="w-full h-full" src={trendSecond.social_image} alt="" /></div>
                    <p className="text-white px-2 w-24 h-8 border-2 border-blue-500 rounded-lg bg-blue-500 absolute top-36 left-12 flex items-center ">Technoloy</p>
                    <p className="text-white absolute top-48 left-12  w-[200px]">The Impact of Technology on the Workplace: How Technology is Changing</p>
                </Link>
                <Link href={`/blog/${trendThird.id}`} className="mt-16 relative ">
                    <div className=" w-[289px] h-[320px]rounded-xl"	><img class="w-full h-full" src={trendThird.social_image} alt="" /></div>
                    <p className="text-white px-2 w-24 h-8 border-2 border-blue-500 rounded-lg bg-blue-500 absolute top-36 left-12 flex items-center  ">Technoloy</p>
                    <p className="text-white absolute top-48 left-12 w-[200px]">The Impact of Technology on the Workplace: How Technology is Changing</p>
                </Link>
                <Link href={`/blog/${trendForth.id}`} className="mt-16 relative ">
                    <div className=" w-[289px] h-[320px] rounded-xl"	><img class="w-full h-full" src={trendForth.social_image} alt="" /></div>
                    <p className="text-white px-2 w-24 h-8 border-2 border-blue-500 rounded-lg bg-blue-500 absolute top-36 left-12 ">Technoloy</p>
                    <p className="text-white absolute top-48 left-12  w-[200px]">The Impact of Technology on the Workplace: How Technology is Changing</p>
                </Link> */}

            </div>



        </div>


    )
}