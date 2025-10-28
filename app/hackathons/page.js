import PageLayout from "../components/pagelayout"
import Link from "next/link"
import Image from "next/image"
import { getHackathons } from "./feeder"

export default async function Page() {
  const hackathons = await getHackathons()
  return (
    <PageLayout title="Hackathon Devlogs">
      <h1>Here are all the hackathons that I have documented:</h1> 
        
        {hackathons.sort((a, b) => new Date(b.frontmatter.publishDate) - new Date(a.frontmatter.publishDate)).map((hackathon, i) => (
         <div className="bg-black my-5">
            <h2 className={`text-3xl text-center ${hackathon.frontmatter.textColor}`}>{hackathon.frontmatter.title}</h2>
        <div className="rounded-md text-white flex flex-row items-center mx-auto">
          <div className="flex flex-col w-[30%]">
            <div className="flex flex-col justify-center items-center">
              <div className="my-2 flex flex-col items-center">
                <Image src={hackathon.frontmatter.hackathonImg} height={100} width={100} alt="Hackathon Logo"></Image>
                <Link className={`text-3xl text-center rounded-sm bg-gray-800 ${hackathon.frontmatter.textColor}`} href={"./"+hackathon.slug}>Submission</Link>
              </div>
              {hackathon.frontmatter.projectUrl && (
              <div className="my-2 flex flex-col items-center">
                <Image src={hackathon.frontmatter.projectImg} height={100} width={100} alt="Project Logo"></Image>
                <Link className={`text-3xl text-center rounded-sm bg-gray-800 ${hackathon.frontmatter.textColor}`} href={hackathon.frontmatter.projectUrl}>Source</Link>
              </div>
              )}
              </div>
          </div>
          <div className=" text-3xl w-[70%] text-center m-2 rounded-md flex flex-col">
            <div className="bg-gray-800 my-2">
              {hackathon.frontmatter.summary}
            </div>
            <div className="my-2 flex justify-center">
                <Link className={`bg-gray-800 w-[60%] ${hackathon.frontmatter.textColor} text-center`} href={`./hackathons/${hackathon.slug}`}>Go To Devlog</Link>
              </div>
          </div>
        </div>
          </div>
        ))}
                



    </PageLayout>
  )
}