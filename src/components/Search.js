"use client"

import { MetablogIcon } from "../assets/Metablog";
import { DrawerIcon } from "../assets/DrawerIcon";
import { IoSearchOutline } from "react-icons/io5";
import Link from "next/link"
import { useState, useEffect } from "react";





export const Search = (articles) => {

    const [blogs, setBlogs] = useState([])
    const [search, setSearch] = useState(true)



    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch(`https://dev.to/api/articles`);
                const data = await res.json();
                setBlogs(data);
            } catch (error) {
                console.log(error);
            }
        };
        getData()
    }, []);

    const [info, setInfo] = useState([])

    blogs.map((item) => {
        setInfo
    })

    const [activeSearch, setActiveSearch] = useState([])

    const handleSearch = (e) => {
        if (e.target.value == '') {
            setActiveSearch([])
            return false
        }
        setActiveSearch(info.filter(info.filter)(i => i.includes(e.info.value)).slice(0, 8))
    }



    return (
        <form className="relative">


            <div className="flex items-center relative">
                <input className="px-2 " type="search" placeholder="Search.. " onChange={(e) => handleSearch(e)} />
                <button className="absolute ml-36"><IoSearchOutline /></button>
            </div>

            {
                activeSearch.length > 0 && (
                    <div className="absolute flex flex-col gap-2 -translate-x-1/2 left-24 px-2 top-6 w-full rounded-xl border-2">
                        {
                            activeSearch.map(s => (
                                <span>{s}</span>
                            ))
                        }

                    </div>
                )
            }



        </form>


    );
};