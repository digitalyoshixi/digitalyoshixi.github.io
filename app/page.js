import MyMDXContent from './pagecontent.mdx';
import ProseLayout from './components/proselayout';

export default function Page() {
  return (
    <ProseLayout className="prose dark:prose-invert" title="Home">
      <MyMDXContent/>
    </ProseLayout>
  )
}