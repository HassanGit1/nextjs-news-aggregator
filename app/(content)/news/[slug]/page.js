import { DUMMY_NEWS } from "@/dummy-news"
import Link from "next/link"
import { notFound } from "next/navigation"

export default function NewsDetailPage ({params}) {
    const newsSlug = params.slug
    const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug === newsSlug)
    if(!newsItem){
      notFound()
    }
    return(
        <article className="news-article">
         <header>
            <Link href={`/news/${newsItem.slug}/image`}>
              <img src={`/images/news/${newsItem.image}`} alt={newsItem.title}/>
            </Link>
           
         <h1 className="text-4xl font-semibold text-yellow-400 mb-2">
            {newsItem.title}
            </h1>
         <time className="text-lg text-green-400"
          dateTime={newsItem.date}>
            {newsItem.date}
            </time>
         </header>
         <p className="text-xl mt-2 text-yellow-50">
            {newsItem.content}
        </p>
        </article>
    )
}