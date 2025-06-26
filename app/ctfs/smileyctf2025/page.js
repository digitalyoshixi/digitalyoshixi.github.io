import PageLayout from '../../components/proselayout';
import MyMDXContent from './pagecontent.mdx'
export default function Page() {
  return (
    <PageLayout className="prose dark:prose-invert" title="SmileyCTF 2025">
      <MyMDXContent></MyMDXContent>
    </PageLayout>
  )
}