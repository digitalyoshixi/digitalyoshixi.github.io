import PageLayout from "../components/pagelayout"
import Link from "next/link"

export default function Page() {
  return (
    <PageLayout title="About">
      <p>Hi there, im David.</p>
      <br/>
      <p>Im a hobbyist programmer with a specific passion for <strong className="text-red-500">systems programming</strong> and <strong className="text-red-500">software security</strong>.</p>
      <p>I also love reading sci-fi, doing cardio and being as frugal as humanly possible 💸.</p>

      <br/>
      <p>Im currently in my first year of CS at the <Link className="text-blue-500" href="https://uoftindex.ca/home">University of Toronto</Link>. I am also majoring in stats and minoring in philosophy :)</p>
      <br/>
      <h2 className="text-3xl font-bold"> Tech I use </h2>
      If you want to know some of the tech I use, I have them listed <Link className="text-blue-500" href="/tech"> Here </Link>

      <br/>
      <br/>
      <h2 className="text-3xl font-bold"> CV </h2>
      I also have included my CV on this page, although it is not anything remarkable yet: <Link className="text-blue-500" href="/about/CV.pdf">Resume</Link>
    </PageLayout>
  )
}