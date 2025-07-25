import PageLayout from "../components/pagelayout"
import Link from "next/link"
import Image from "next/image"
export default function Page() {
  return (
    <PageLayout title="Hackathon Devlogs">
      <h1>Here are all the hackathons that I have documented:</h1> 
        
        <div className="m-10 rounded-md bg-black text-white flex flex-row items-center mx-auto">
          <div className="flex flex-col w-[30%]">
            <h2 className="text-3xl text-center text-teal-200">HackThe6ix 2025</h2>
            <div className="flex flex-row justify-center items-center">
              <div className="m-5 flex flex-col items-center">
                <Image src="/hackathons/hackthe6ix2025/logo.png" height={100} width={100} alt="HackThe6ix Logo"></Image>
                <Link className="text-3xl m-2 text-center rounded-sm bg-gray-800 text-teal-500" href="https://devpost.com/software/puzzleql">Devpost</Link>
              </div>
              <div className="m-5 flex flex-col items-center">
                <Image src="/hackathons/hackthe6ix2025/puzzleql.png" height={100} width={100} alt="Wormdive Logo"></Image>
                <Link className="text-3xl m-2 text-center rounded-sm bg-gray-800 text-teal-500" href="https://github.com/squealql/PuzzleQL">PuzzleQL</Link>
              </div>
              </div>
              <div className="flex justify-center">
                <Link className="bg-gray-800 m-2 w-[60%] text-teal-200 text-center" href="./hackathons/hackthe6ix2025">Go To Devlog</Link>
              </div>
          </div>
          <div className="bg-gray-800 text-3xl w-[70%] text-center m-5 rounded-md h-40 flex flex-col">
            Heres a fun way to write SQL. We made a block-like coding engine for generating SQL queries and a variety of schema visualization tools for beginners to ease them into how SQL functions.
          </div>
        </div>

        <div className="m-10 rounded-md bg-black text-white flex flex-row items-center mx-auto">
          <div className="flex flex-col w-[30%]">
            <h2 className="text-3xl text-center text-orange-200">Spurhacks 2025</h2>
            <div className="flex flex-row justify-center items-center">
              <div className="m-5 flex flex-col items-center">
                <Image src="/hackathons/spurhacks2025/spur.jpg" height={100} width={100} alt="Spurhacks Logo"></Image>
                <Link className="text-3xl m-2 text-center rounded-sm bg-gray-800 text-orange-500" href="https://devpost.com/software/wormdive">Devpost</Link>
              </div>
              <div className="m-5 flex flex-col items-center">
                <Image src="/hackathons/spurhacks2025/wormdive.png" height={100} width={100} alt="Wormdive Logo"></Image>
                <Link className="text-3xl m-2 text-center rounded-sm bg-gray-800 text-orange-500" href="https://github.com/byte-babies/wormdive">Wormdive</Link>
              </div>
              </div>
              <div className="flex justify-center">
                <Link className="bg-gray-800 m-2 w-[60%] text-orange-200 text-center" href="./hackathons/spurhacks2025">Go To Devlog</Link>
              </div>
          </div>
          <div className="bg-gray-800 text-3xl w-[70%] text-center m-5 rounded-md h-40 flex flex-col">
            A OSINT tool for visualizing a user's online presence on different websites. Has a graph view to allow you to trace and follow a user's history across multiple sites
          </div>
        </div>

        <div className="m-10 rounded-md bg-black text-white flex flex-row items-center mx-auto">
          <div className="flex flex-col w-[30%]">
            <h2 className="text-3xl text-center text-pink-500">DS3 Datathon 2025</h2>
            <div className="flex flex-row justify-center items-center">
              <div className="m-5 flex flex-col items-center">
                <Image src="/hackathons/ds32025/logo.png" className="rounded-sm" height={100} width={100} alt="Deerhacks Logo"></Image>
                <Link className="text-3xl m-2 text-center rounded-sm bg-gray-800 text-pink-500" href="https://deerhacks-iv-2025.devpost.com/">Kaggle</Link>
              </div>
            </div>
            <div className="flex justify-center">
              <Link className="bg-gray-800 m-2 w-[60%] text-pink-300 text-center" href="./hackathons/ds3datathon2025">Go To Devlog</Link>
            </div>
          </div>
          <div className="bg-gray-800 text-3xl text-center w-[70%] m-5 rounded-md h-40 flex flex-col">
            We made 3 classification models for 3 of the datathon challenges. Ended up with 100%, 93% and 24% accuracy for each challenge as the difficulty progressed. Learned a lot of cool preprocessing techniques and experimented with many different ML models.
          </div>
        </div>


        <div className="m-10 rounded-md bg-black text-white flex flex-row items-center mx-auto">
          <div className="flex flex-col w-[30%]">
            <h2 className="text-3xl text-center text-blue-200">Deerhacks 2025</h2>
            <div className="flex flex-row justify-center items-center">
              <div className="m-5 flex flex-col items-center">
                <Image src="/hackathons/deerhacks2025/deerhacks.png" height={100} width={100} alt="Deerhacks Logo"></Image>
                <Link className="text-3xl m-2 text-center rounded-sm bg-gray-800 text-blue-500" href="https://deerhacks-iv-2025.devpost.com/">Devpost</Link>
              </div>
              <div className="m-5 flex flex-col items-center">
                <Image src="/hackathons/deerhacks2025/geminaut.png" height={100} width={100} alt="Geminaut Logo"></Image>
                <Link className="text-3xl m-2 text-center rounded-sm bg-gray-800 text-blue-500" href="https://github.com/krishpdev/Deerhacks-IV">Geminaut</Link>
              </div>
              </div>
              <div className="flex justify-center">
                <Link className="bg-gray-800 m-2 w-[60%] text-blue-200 text-center" href="./hackathons/deerhacks2025">Go To Devlog</Link>
              </div>
          </div>
          <div className="bg-gray-800 text-3xl w-[70%] text-center m-5 rounded-md h-40 flex flex-col">
            A GEMINI protocol browser called Geminaut. It is a simple browser that can render gemtext and links. It comes with additional features like tabbing and history.
          </div>
        </div>

    </PageLayout>
  )
}