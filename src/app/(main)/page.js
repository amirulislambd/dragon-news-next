import { redirect } from "next/navigation";


const default_category_id='01'

export default async function Home() {

  return (
    
redirect(`/category/${default_category_id}`)
  );
}
