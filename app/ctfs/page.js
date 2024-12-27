import MDXLayout from '../components/mdxlayout';
import MyMDXContent from './pagecontent.mdx';

export default function Page() {
  return (
    <MDXLayout title="CTFs">
        <MyMDXContent/>
    </MDXLayout>
  )
}