"use client"

import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { MainCarousel } from "../components/MainCarousel";
import { Trending } from "../components/TrendingCards";
import { Allblog } from "../components/AllBlogCards";
import { Loadmore } from "../components/BlogTag";
import { FooterUp } from "../components/Footer-Up";
import { FooterDown } from "../components/Footer-Down";

import { useEffect, useState } from "react";
import { BigCarousel } from "@/components/BigCarousel";

const getArticle = async () => {

  const res = await fetch("https://dev.to/api/articles"
  );

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

  // const setData = ({ articles }) => {
  //   arr.sort((a, b) => {
  //     if (b.articles[i] < a.articles[i + 1])
  //       if (a.articles[i + 1] > b.articles[i]);
  //   })

  return (
    <main className="bg-white ">
      <div className="px-4 max-w-screen-xl m-auto ">
        <Navbar />
        {/* <MainCarousel articles={articles} /> */}
        <BigCarousel articles={articles} />
        <Trending articles={articles} />
        <Allblog />

      </div>
      <FooterUp />

      <FooterDown />


    </main>
  );
}

