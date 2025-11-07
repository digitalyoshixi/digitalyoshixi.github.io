import PageLayout from "../components/pagelayout"
import Link from "next/link"
import { getBlogs } from "./feeder"

export default async function Page() {
  const blogs = await getBlogs()
  return (
    <PageLayout title="Blog">
      <h1 className="text-5xl text-green-500">This is my blog!!!</h1>

      <p>If you wish to subscribe, add this <Link className="text-blue-800" href="./blog/feed.xml">RSS</Link></p>
      {blogs.sort((a, b) => new Date(b.frontmatter.publishDate) - new Date(a.frontmatter.publishDate)).map((blog, i) => (
        <article key={i} className="my-5 rounded-sm outline text-center text-1xl">
          <div className="flex-row flex bg-[#a1dda1]">
            <div className="w-full flex flex-col items-center justify-center">
              <p className="text-1xl md:text-2xl pt-2 text-green-700">{blog.frontmatter.title}</p>
              <img src={blog.frontmatter.imageurl} className="w-40 h-40"></img>
              <p>{blog.frontmatter.publishDate}</p>
              <Link className="bg-green-500 text-white rounded-sm p-2 hover:bg-green-700" href={`/blog/${blog.slug}`}>Read Post</Link>
            </div >
            <div className="flex-col flex pt-10 mx-5">

            </div>
          </div>
        </article>
      ))}
    </PageLayout>
  )
}

