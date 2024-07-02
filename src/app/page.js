"use client"

import Image from "next/image";
import { Navbar } from "@/app/components/Navbar";
import { MainCarousel } from "./components/MainCarousel";
import { Trending } from "./components/TrendingCards";
import { Allblog } from "./components/AllBlogCards";
import { Loadmore } from "./components/LoadMore";
import { FooterUp } from "./components/Footer-Up";
import { FooterDown } from "./components/Footer-Down";

import { useEffect, useState } from "react";

const getArticle = async () => {

  const res = await fetch("https://dev.to/api/articles?pages=");

  const articles = await res.json();

  return articles
};


export default function Home() {

  const [articles, setArticles] = useState([]);

  const getData = async () => {

    const data = await getArticle();

    setArticles(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <main className="bg-white ">
      <div className="px-4 max-w-screen-xl m-auto ">
        <Navbar />
        <MainCarousel articles={articles} />
        <Trending />
        <Allblog articles={articles} />
        <Loadmore />




      </div>
      <FooterUp />

      <FooterDown />


    </main>
  );
}
