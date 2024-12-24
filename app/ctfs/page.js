import PageLayout from "../components/pagelayout"
import MyMDXContent from './pagecontent.mdx';

export default function Page() {
  return (
    <PageLayout title="CTFs">
        <MyMDXContent/>
    </PageLayout>
  )
}