import NewsList from "@/components/news-list/news-list"
import { getLatestNews } from "@/lib/news"

export default function LatestNews () {

    const latestNews = getLatestNews()

    return(
        <>
         <h1
         className="text-yellow-400 text-5xl 
         tracking-wider text-center font-black mb-8 ">
            Latest News
        </h1>
         <NewsList news={latestNews}/>
        </>
    )
}