import LeftSidebar from "@/app/components/homepage/news/LeftSidebar";
import RightSidebar from "@/app/components/homepage/news/RightSidebar";
import React from "react";

async function getCategory() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data;
}

const NewsPage = async () => {
  const categories = await getCategory();
  console.log(categories);
  return (
    <div className="container mx-auto grid grid-cols-12 gap-4 mt-5">
      <LeftSidebar categories={categories} activeId={null}></LeftSidebar>

      <div className="font-bold text-3xl bg-green-100 col-span-6 "></div>

      <div className=" col-span-3">
        <RightSidebar></RightSidebar>
      </div>
    </div>
  );
};

export default NewsPage;
