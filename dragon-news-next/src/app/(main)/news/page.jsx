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
    <div className="container mx-auto grid grid-cols-12 gap-4">
      <div className="font-bold text-3xl col-span-3">
        <h2 className="text-xl text-center">All category</h2>
        <ul className="flex flex-col gap-3 mt-6">
          {categories.news_category.map((category, idx) => {
            return (
              <li
                key={idx}
                className="bg-slate-100 p-2 rounded-md font-bold text-center text-lg"
              >
                {category.category_name}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="font-bold text-3xl bg-green-100 col-span-6 ">
        All News
      </div>

      <div className="font-bold text-3xl bg-green-100 col-span-3">
        All Icons
      </div>
    </div>
  );
};

export default NewsPage;
