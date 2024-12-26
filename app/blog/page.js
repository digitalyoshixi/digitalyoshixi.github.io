import PageLayout from "../components/pagelayout"
import MyMDXContent from './pagecontent.mdx';
import Link from "next/link"
import { getBlogs } from "./feeder"

export default async function Page() {
  const blogs = await getBlogs()
  return (
    <PageLayout title="Blog">
        <MyMDXContent/>
      {blogs.map((blog, i) => (
        <article key={i} className="my-5 rounded-lg outline text-center text-3xl">
          <div className="flex-row flex bg-[#a1dda1]">
            <div className="w-[50%] flex-col flex">
              <p className="text-5xl pt-2 text-green-700">{blog.frontmatter.title}</p>
              <p className="">{blog.frontmatter.author}</p>
              <p>{blog.frontmatter.publishDate}</p>
            </div >
            <div className="flex-col flex mx-5">

              <p>{blog.frontmatter.description}</p>
              <Link href={`/blog/${blog.slug}`}>Read More</Link>
            </div>
          </div>
        </article>
      ))}
    </PageLayout>
  )
}

