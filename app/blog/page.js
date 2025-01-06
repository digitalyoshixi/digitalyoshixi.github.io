import PageLayout from "../components/pagelayout"
import MyMDXContent from './pagecontent.mdx';
import Link from "next/link"
import { getBlogs } from "./feeder"

export default async function Page() {
  const blogs = await getBlogs()
  return (
    <PageLayout title="Blog">
        <MyMDXContent/>
      {blogs.sort((a, b) => new Date(b.frontmatter.publishDate) - new Date(a.frontmatter.publishDate)).map((blog, i) => (
        <article key={i} className="my-5 rounded-sm outline text-center text-3xl">
          <div className="flex-row flex bg-[#a1dda1]">
            <div className="w-[60%] flex flex-col items-center justify-center">
              <p className="text-3xl pt-2 text-green-700">{blog.frontmatter.title}</p>
              <img src={blog.frontmatter.imageurl} className="w-40 h-40"></img>
              <p>{blog.frontmatter.publishDate}</p>
            </div >
            <div className="flex-col flex pt-10 mx-5">

              <p>{blog.frontmatter.description}</p>
              <Link href={`/blog/${blog.slug}`}>Read Post</Link>
            </div>
          </div>
        </article>
      ))}
    </PageLayout>
  )
}

