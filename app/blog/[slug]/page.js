import { getBlogBySlug, getAllBlogSlug } from "../feeder.js"
import PageLayout from "@/app/components/pagelayout.js"
import Page from "../page.js"
export async function generateStaticParams() {
  return getAllBlogSlug()
}

export default async function BlogPage({params}) {
  const blog = await getBlogBySlug(params.slug)
  return (
    <PageLayout title={blog.frontmatter.title}>
        <div className="text-center outline-dotted font-extrabold">
        {blog.frontmatter.publishDate}
        <br/>
        {blog.frontmatter.author}
        </div>
        <br/>
        {blog.content}
    </PageLayout>
  )
}