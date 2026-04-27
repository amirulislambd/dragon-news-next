import { getNewsDetailsById } from '@/lib/dataFecth';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaEye, FaShareAlt, FaStar } from 'react-icons/fa';
import { FaBookBookmark } from 'react-icons/fa6';


export const generateMetadata= async({params}) => {
  const {id}=await params
  const news = await getNewsDetailsById(id)
return {
  title: news.title,
  description: news.description,
  icons:{
    icon: news.image_url,
    shortcut: news.image_url, 
    apple: news.image_url, 
  }
}

};

const NewsDetailsPage = async({params}) => {
    const {id} = await params
    const news = await getNewsDetailsById(id)
    console.log(news)
    return (
        <div className="card bg-base-100  shadow-sm space-y-3 p-4 max-w-5xl mx-auto my-5">
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
     <div>
     <button className='btn btn-outline hover:btn-neutral'>
     <Link href={`/category/${news.category_id}`}>
     Go Back news
      </Link>
     </button>
     </div>
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

export default NewsDetailsPage;