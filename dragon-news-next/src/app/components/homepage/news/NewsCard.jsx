import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiShare2, CiStar } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { FaEye } from "react-icons/fa";

const NewsCard = ({ singleNews }) => {
  console.log(singleNews);
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body">
        {/* Author */}
        <div className="flex justify-between items-center bg-slate-200">
          <div className="flex gap-2 items-center">
            {" "}
            <Image
              src={singleNews.author?.img}
              alt={singleNews?.title}
              height={40}
              width={40}
              className="rounded-full"
            />
            <div>
              <h2 className="font-semibold">{singleNews.author?.name}</h2>
              <h2 className="text-xs">{singleNews.author?.published_date}</h2>
            </div>
          </div>
          <div className="flex">
            <CiShare2 className="text-xl" />
            <CiBookmark className="text-xl" />
          </div>
        </div>
        <h2 className="card-title">{singleNews.title}</h2>

        <figure>
          <Image
            src={singleNews.thumbnail_url}
            alt={singleNews.title}
            width={800}
            height={200}
            className="w-full"
          ></Image>
        </figure>

        <p className="line-clamp-2">{singleNews.details}</p>

        <div>
          <div className="flex items-center gap-2 justify-between">
            <h3 className="flex gap-2">
              <CiStar className="text-lg" /> {singleNews.rating.number}
            </h3>

            <h3 className="flex gap-2">
              <FaEye className="text-lg" /> {singleNews.total_view}
            </h3>
          </div>

          <Link href={`/news/${singleNews._id}`}>
            <button className="btn">See Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
