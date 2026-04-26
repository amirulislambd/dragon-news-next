export async function getCategories() {
    const res = await fetch(
      "https://openapi.programming-hero.com/api/news/categories",
    );
    const data = await res.json();
    return data.data.news_category;
  }
export  async function getCategoryById(categoryId) {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/news/category/${categoryId}`
    );
    const data = await res.json();
    return data.data;
  }
export  async function getNewsDetailsById(detailsId) {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/news/${detailsId}`
    );
    const data = await res.json();
    return data.data[0];
  }
