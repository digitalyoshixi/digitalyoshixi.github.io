import PageLayout from "./components/pagelayout"
import MyMDXContent from './pagecontent.mdx';

export default function Page() {
  return (
    <PageLayout className="prose dark:prose-invert" title="Home">
      <MyMDXContent/>
    </PageLayout>
  )
}