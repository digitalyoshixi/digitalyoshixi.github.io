import PageLayout from "../components/pagelayout"
import Link from "next/link"
import Image from "next/image"
export default function Page() {
  return (
    <PageLayout title="Hackathon Devlogs">
      <h1>Here are all the hackathons that I have documented:</h1> 
        <div className="m-10 rounded-md bg-black w-[90%] text-white flex flex-row items-center mx-auto">
          <div className="flex flex-col">

            <h2 className="text-5xl text-center text-blue-200">Deerhacks 4</h2>
            <div className="flex flex-row justify-center">
              <div className="m-5 flex flex-col">
                <Image src="/hackathons/deerhacks2025/deerhacks.png" height={100} width={100} alt="Deerhacks Logo"></Image>
                <Link className="text-center text-blue-800" href="https://deerhacks-iv-2025.devpost.com/">Devpost</Link>
              </div>
              <div className="m-5 flex flex-col">
                <Image src="/hackathons/deerhacks2025/geminaut.png" height={100} width={100} alt="Geminaut Logo"></Image>
                <Link className="text-center text-blue-800" href="https://github.com/krishpdev/Deerhacks-IV">Geminaut</Link>
              </div>
              </div>
              <div className="flex justify-center">
                <Link className="bg-gray-200 w-[60%] text-blue-200 text-center" href="./hackathons/deerhacks2025">Go To Devlog</Link>
              </div>
          </div>
          <div className="bg-gray-100 text-center m-5 h-full w-1/2 flex flex-col">
            A GEMINI protocol browser called Geminaut. It is a simple browser that can render gemtext and links. It comes with additional features like tabbing and history.
          </div>
        </div>
    </PageLayout>
  )
}