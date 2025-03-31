import { getBlogBySlug, getAllBlogSlug } from "../feeder.js"
import MDXLayout from "@/app/components/mdxlayout"
import Page from "../page.js"
import Link from 'next/link'
export async function generateStaticParams() {
  return getAllBlogSlug()
}

export default async function BlogPage({params}) {
  const blog = await getBlogBySlug(params.slug)
  return (
    <MDXLayout title={blog.frontmatter.title} author={blog.frontmatter.author} publishDate={blog.frontmatter.publishDate}>
        {blog.content}
    </MDXLayout>
  )
}