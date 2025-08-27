import PageLayout from "../components/pagelayout"
import Garden from "../components/garden"
import Link from "next/link"

export default function Page() {
  return (
    <PageLayout title="Garden">
      <p>~This is some stuff ive been growing~</p>
      Canvas is not interactable yet!
      <Garden></Garden>

      <h1 className="text-red-500 text-3xl">Relevant Blog Posts</h1> 
      <ul>
        <li> <Link className="hover:text-green-200 text-white" href="/blog/garden2">- Garden 2</Link> </li>
        <li> <Link className="hover:text-green-200 text-white" href="/blog/garden1">- Garden 1</Link> </li>
      </ul>
    </PageLayout>
  )
}