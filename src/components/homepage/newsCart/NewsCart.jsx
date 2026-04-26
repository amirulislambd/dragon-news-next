import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaEye, FaShare, FaShareAlt, FaStar } from "react-icons/fa";
import { FaBookBookmark } from "react-icons/fa6";

const NewsCart = ({ news }) => {
  // console.log(news._id);
  return (
    <div className="card bg-base-100  shadow-sm space-y-3 p-4">
      <div className="space-y-3">
        <h2 className="card-title">{news.title}</h2>
        <div className="flex items-center justify-between p-4 bg-gray-100">
          <div className="flex items-center gap-2">
            <Image
              className="rounded-full"
              width={50}
              height={50}
              src={news.author?.img}
              alt="author image"
            />
            <div>
              <h1 className="font-semibold">{news.author.name}</h1>
              <p>
                {new Date(news.author?.published_date).toLocaleDateString()}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xl">
            <FaBookBookmark />
            <FaShareAlt />
          </div>
        </div>
      </div>
      <figure>
        <Image
          className="object-contain w-full"
          width={300}
          height={300}
          src={news.image_url}
          alt="news image"
        />
      </figure>
      <p className="line-clamp-3">{news.details}</p>
      <Link href={`/news/${news._id}`}>
      <button className="text-red-500 transition-all duration-300 hover:scale-105 cursor-pointer">Mor details...</button>
      </Link>
      <div className="divider"></div>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <span className="flex items-center text-yellow-500">
            <FaStar />
            <FaStar />
            <FaStar />
          </span>
          <span className="font-semibold">{news.rating?.number}</span>
        </div>
        <div className="flex items-center gap-2 text-lg font-semibold">
          <FaEye />
          <span>{news.total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCart;
