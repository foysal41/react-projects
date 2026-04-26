import Link from "next/link";
import React from "react";

const LeftSidebar = async ({ categories, activeId }) => {
  return (
    <div className="font-bold text-3xl col-span-3">
      <h2 className="text-xl text-center">All category</h2>
      <ul className="flex flex-col gap-3 mt-6">
        {categories.news_category.map((category, idx) => {
          return (
            <li
              key={idx}
              className={` ${activeId === category.category_id ? "bg-slate-100 text-red-400" : ""}   rounded-md font-bold text-center text-lg`}
            >
              <Link
                className="block p-2"
                href={`/category/${category.category_id}`}
              >
                {""}

                {category.category_name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LeftSidebar;
