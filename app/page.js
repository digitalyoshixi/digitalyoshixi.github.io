import MDXLayout from "./components/mdxlayout"
import MyMDXContent from './pagecontent.mdx';

export default function Page() {
  return (
    <MDXLayout className="prose dark:prose-invert" title="Home">
      <MyMDXContent/>
    </MDXLayout>
  )
}