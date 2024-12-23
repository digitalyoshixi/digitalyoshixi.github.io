import PageLayout from "../components/pagelayout"
import MyMDXContent from './page.mdx';

export default function Home() {
  return (
    <PageLayout title="CTFs">
      <div className="prose dark:prose-invert">
        <MyMDXContent/>
      </div>
    </PageLayout>
  )
}