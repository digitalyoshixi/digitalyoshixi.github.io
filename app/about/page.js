import PageLayout from "../components/pagelayout"
import MyMDXContent from './page.mdx';

export default function Page() {
  return (
    <PageLayout title="About">
        <MyMDXContent/>
    </PageLayout>
  )
}