import PageLayout from '../../components/pagelayout';
import MyMDXContent from './pagecontent.mdx'
export default function Page() {
  return (
    <PageLayout className="prose dark:prose-invert" title="UoftCTF 2025">
      <MyMDXContent></MyMDXContent>
    </PageLayout>
  )
}