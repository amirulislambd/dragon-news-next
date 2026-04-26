import LeftSidebar from "@/components/homepage/LeftSidebar/LeftSidebar";
import NewsCart from "@/components/homepage/newsCart/NewsCart";
import RightSidebar from "@/components/homepage/rightSidebar/RightSidebar";
import { getCategories, getCategoryById } from "@/lib/dataFecth";




const CategoryPage =async ({params}) => {
  const {id}=await params
  
    const categories = await getCategories();
  // console.log(categories);
  const categoryId = await getCategoryById(id)
  // console.log(categoryId)


  return (
    <div className="grid grid-cols-12 gap-4 container mx-auto">
      <div className="col-span-3 ">
        <h1 className="text-lg font-semibold mb-2">All categories</h1>
        <LeftSidebar categories={categories} activeId={id}/>
      </div>
      <div className="col-span-6">
      <div className="flex flex-col space-y-3 p-2">
        <h1 className="text-lg font-semibold">News By Category</h1>
      {
       categoryId.length>0? categoryId.map(news=><NewsCart key={news._id} news={news}/>):<h1 className="text-2xl font-bold flex flex-col justify-center items-center h-screen">NOT FOUNT DATA</h1>
      }
      </div>

      </div>
      <div className="col-span-3 bg-amber-50">
        <RightSidebar/>
      </div>
    </div>
  );
};

export default CategoryPage;