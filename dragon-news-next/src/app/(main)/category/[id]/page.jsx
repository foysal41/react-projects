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

async function getNewsByCategoryId(category_id) {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${category_id}`,
  );
  const data = await res.json();
  return data.data;
}
const NewsCategoryPage = async ({ params }) => {
  const { id } = await params;
  const categories = await getCategory();
  const news = await getNewsByCategoryId(id);

  return (
    <div className="container mx-auto grid grid-cols-12 gap-4 mt-5">
      <LeftSidebar categories={categories} activeId={id}></LeftSidebar>

      <div className=" col-span-6 ">
        all News
        <div className="space-y-4">
          {news.length > 0 ? (
            news.map((singleNews, idx) => {
              return (
                <div key={idx} className="p-6 rounded-md border ">
                  {singleNews.title}
                </div>
              );
            })
          ) : (
            <h3 className="font-bold text-4xl text-center my-7 mt-6">
              No news found{" "}
            </h3>
          )}
        </div>
      </div>

      <div className=" col-span-3">
        <RightSidebar></RightSidebar>
      </div>
    </div>
  );
};

export default NewsCategoryPage;
