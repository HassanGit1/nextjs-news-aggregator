import NewsList from "@/components/news-list/news-list";
import { getAllNews } from "@/lib/news";

export default async function NewsPage () {

  const news = getAllNews()
    return(
     <>
       <h1 className="text-yellow-400 text-5xl 
       tracking-wider text-center font-black mb-8 ">
        News Page
        </h1>  
       <NewsList news={news}/>
     </>
    )
}