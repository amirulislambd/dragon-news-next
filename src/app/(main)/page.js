import LeftSidebar from "@/components/homepage/LeftSidebar/LeftSidebar";
import Image from "next/image";

async function getCategories() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data.news_category;
}

export default async function Home() {
  const categories = await getCategories();
  console.log(categories);
  return (
    <div className="grid grid-cols-12 gap-4 container mx-auto">
      <div className="col-span-3 ">
        <h1 className="text-lg font-semibold mb-2">All categories</h1>
        <LeftSidebar categories={categories} activeId={null}/>
      </div>
      <div className="col-span-6 bg-pink-100"> All news</div>
      <div className="col-span-3 bg-amber-50">social icons</div>
    </div>
  );
}
