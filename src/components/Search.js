"use client"

import { MetablogIcon } from "../assets/Metablog";
import { DrawerIcon } from "../assets/DrawerIcon";
import { IoSearchOutline } from "react-icons/io5";
import Link from "next/link"
import { useState, useEffect } from "react";





export const Search = () => {

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


    return (

        <div className="flex items-center">
            <input className="px-2 relative" type="search" placeholder="Search.. "></input>
            <button className="absolute ml-36"><IoSearchOutline /></button>



        </div>


    );
};